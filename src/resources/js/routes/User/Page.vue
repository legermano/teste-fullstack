<style scoped>
    @import url("https://fonts.googleapis.com/css2?family=Caveat&family=Roboto+Mono&display=swap");

    *, *:before, *:after {
        padding: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #333;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        font-family: 'Roboto Mono', monospace;
    }

    body#user-page {
        background-color: #FFCA28;
        height: 100vh;
        top: 0;
        right: 0;
        left: 0;
        position: absolute;
    }

    ul {
        margin-bottom: 0.6rem;
    }

    ul li {
        list-style: none;
        border: 0.1rem solid #333;
        margin: 0rem 0.84rem 0.84rem 0.84rem;
        padding-bottom: .5rem;
        padding-top: .5rem;
    }

    ul li a {
        width: 100%;
        text-align: center;
        text-decoration: none;
        font-size: 1rem;
        /* background-color: red; */
    }

    ul li:hover {
       background-color: #333;
    }

    ul li:hover a {
        color: white;
    }
</style>
<template>
    <body id="user-page">
        <div class="container-md d-flex flex-column align-items-center">
            <h1 v-text="username"></h1>
            <ul class="col-md-10 d-flex flex-column">
                <li
                    v-for="link in links"
                    :key="link.id"
                    class="d-flex"
                >
                    <a target="_blank" v-text="link.name" v-bind:href="link.link"></a>
                </li>
            </ul>
        </div>
    </body>
</template>
<script>
export default {
        data() {
            return {
                user: []
            }
        },
        mounted() {
            this.getData();

        },
        methods: {
            async getData() {
                axios.get('/api/user/'+this.$route.params.username)
                    .then((response) => {
                        this.user = response.data;
                    })
                    .catch((error) => {
                        console.error(error);
                    })
            }
        },
        computed: {
            links() {
                return this.user.links;
            },
            username() {
                return "@"+this.user.username;
            }
        }
    }
</script>
