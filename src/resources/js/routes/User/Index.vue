<style lang="scss">
    div#main{
        margin-top: 1em;
        display: grid;
    }

    button#addLink {
        margin-bottom: 1em;
    }
</style>
<template>
    <div id="main" class="container-md">
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
</template>
<script>
    export default {
        methods: {
            linkForm(id) {
                this.$router.push({name: 'user.link', params:{id: id}});
            },
            //TODO : Confirmation question (use sweet alerts?)
            deleteLink(id) {
                axios.delete('/api/link/'+id)
                    .then((response) => {
                        this.$store.commit('removeFromLinks',id);
                        this.$toastr.s("The link was succesfull deleted!");
                    })
                    .catch((error) => {
                        console.error(error);
                        this.$toastr.s("An error ocurred when trying to delete the link");
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
