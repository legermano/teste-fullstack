<style lang="scss">
    div#main{
        margin-top: 1em;
        display: grid;
    }

    button#addLink {
        margin-bottom: 1em;
    }

    #user-conf input{
        margin-bottom: 1em;
    }
</style>
<template>
    <div id="main" class="d-flex">
        <div class="col-md-9">
            <button id="addLink" type="button" class="btn btn-primary" @click="linkForm()">Add new link</button>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th class="col-md-1" scope="col"></th>
                        <th class="col-md-5" scope="col">Name</th>
                        <th class="col-md-5" scope="col">Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="link in links"
                        :key="link.id"
                    >
                        <th class="col-md-1" scope="row">
                            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                <button type="button" class="btn btn-success" @click="linkForm(link.id)">Edit</button>
                                <button type="button" class="btn btn-danger" @click="deleteLink(link.id)">Delete</button>
                            </div>
                        </th>
                        <td class="col-md-5" v-text="link.name"></td>
                        <td class="col-md-5" v-text="link.link"></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="user-conf" class="col-md-3">
            <legend>User configurations</legend>
            <form class="row g-3" v-on:submit.prevent="submitForm">
                <div class="col-md-12">
                    <label for="inputBackground" class="form-label">Background color</label>
                    <div class="d-flex flex-row justify-content-between align-items-center">
                        <input type="text" class="form-control col-md-10" id="inputBackground" placeholder="#FFFFFF" v-model="form.background_color" disabled>
                        <input type="color" id="background-color" name="background-color" v-model="form.background_color">
                    </div>
                </div>
                <div class="col-12">
                    <label for="inputText" class="form-label">Text color</label>
                    <div class="d-flex flex-row justify-content-between align-items-center">
                        <input type="text" class="form-control col-md-10" id="inputText" placeholder="#FFFFFF" v-model="form.text_color" disabled>
                        <input type="color" id="text-color" name="text-color" v-model="form.text_color">
                    </div>
                </div>
                <div class="col-12 d-flex justify-content-end">
                    <button class="btn btn-success">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    id: '',
                    background_color: '',
                    text_color: '',
                    file: ''
                }
            }
        },
        mounted() {
            // FIX-ME
            setTimeout(() => {
                this.form.background_color = this.$store.state.user.background_color;
                this.form.text_color       = this.$store.state.user.text_color;
            }, 400);
        },
        methods: {
            linkForm(id) {
                this.$router.push({name: 'user.link', params:{id: id}});
            },
            //TODO : Confirmation question (use sweet alerts?)
            deleteLink(id) {
                axios.delete('/api/link/'+id)
                    .then(_ => {
                        this.$store.commit('removeFromLinks',id);
                        this.$toastr.s("The link was succesfull deleted!");
                    })
                    .catch((error) => {
                        console.error(error);
                        this.$toastr.s("An error ocurred when trying to delete the link");
                    })
            },
            submitForm() {
                this.form.id = this.$store.state.user.id;
                axios.post('/api/user', this.form)
                    .then(_ => {
                        this.$store.commit('updateUserBackgroundColor', this.form.background_color);
                        this.$store.commit('updateUserTextColor', this.form.text_color);
                        this.$toastr.s("The user was succesfull updated!");
                    })
                    .catch((error) => {
                        console.error(error);
                        this.$toastr.s("An error ocurred when trying to update the user");
                    })
            }
        },
        computed: {
            links() {
                return this.$store.state.user.links;
            }
        }
    }
</script>
