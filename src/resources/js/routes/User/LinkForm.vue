<style lang="scss">
    div#main{
        margin-top: 1em;
        display: grid;
    }

    input {
        margin-bottom: 1em;
    }
</style>
<template>
    <div id="main" class="container-md">
        <legend>Link</legend>
        <form class="row g-3" v-on:submit.prevent="submitForm">
            <div class="col-md-1">
                <label for="inputId" class="form-label">ID</label>
                <input class="form-control" id="inputId" readonly v-model="form.id">
            </div>
            <div class="col-md-11">
                <label for="inputName" class="form-label">Name</label>
                <input type="text" class="form-control" id="inputName" placeholder="Github" v-model="form.name">
            </div>
            <div class="col-12">
                <label for="inputAddress" class="form-label">Link</label>
                <input type="link" class="form-control" id="inputAddress" placeholder="https://github.com/legermano" v-model="form.link">
            </div>
            <div class="col-12 d-flex justify-content-end">
                <button class="btn btn-success">Save</button>
                &nbsp;
                <button class="btn btn-danger" @click="cancel">Cancel</button>
            </div>
        </form>
        &nbsp;
        <legend>Visits history</legend>
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">User IP</th>
                    <th scope="col">User Agent</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="visit in visits"
                    :key="visit.id"
                >
                    <td v-text="visit.created_at"></td>
                    <td v-text="visit.user_ip"></td>
                    <td v-text="visit.user_agent"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    id: '',
                    user_id: '',
                    name: '',
                    link: ''
                },
                visits: []
            }
        },
        mounted(){
            // If theres the ID parameter, edit the link
            if(this.$route.params.id)
            {
                this.getLink(this.$route.params.id);
            }
            // If is a new link, fill the current user id prop
            else
            {
                this.form.user_id = this.$store.state.user.id;
            }
        },
        methods: {
            async getLink(id) {
                await axios.get('/api/link/'+id)
                .then((response) => {
                   this.form.id      = response.data.id;
                   this.form.user_id = response.data.user_id;
                   this.form.name    = response.data.name;
                   this.form.link    = response.data.link;
                   this.visits       = response.data.visits;
                })
                .catch((error) => console.error(error));
            },
            cancel() {
                this.$router.push({name: 'user.index'});
            },
            submitForm() {
                axios.post('/api/link', this.form)
                    .then((response) => {
                        // Default message when the link was updated
                        let successMessage = "The link was succesfull updated!";

                        // New link needs to update the ID input
                        if(response.statusText == 'Created')
                        {
                            this.form.id = response.data.id;
                            successMessage = "The link was succesfull created!";
                        }

                        // Update the user links state
                        this.$store.dispatch('getUserLinks', {
                            user_id : this.$store.state.user.id
                        });

                        this.$toastr.s(successMessage);
                    })
                    .catch((error) => {
                        console.error(error);
                        this.$toastr.s("An error ocurred when trying to save the link");
                    })
            }
        }
    }
</script>
