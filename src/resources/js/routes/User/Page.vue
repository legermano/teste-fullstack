<style scoped>
    @import url("https://fonts.googleapis.com/css2?family=Caveat&family=Roboto+Mono&display=swap");

    *, *:before, *:after {
        padding: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: var(--txt-color);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        font-family: 'Roboto Mono', monospace;
    }

    body#user-page {
        background-color: var(--bkg-color);
        height: auto;
        min-height: 100vh;
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
        border: 0.1rem solid var(--txt-color);
        margin: 0rem 0.84rem 0.84rem 0.84rem;
    }

    ul li a {
        width: 100%;
        text-align: center;
        text-decoration: none;
        font-size: 1rem;
        padding-bottom: .5rem;
        padding-top: .5rem;
    }

    ul li:hover {
       background-color: var(--txt-color);
    }

    ul li:hover a {
        color: white;
    }

    .avatar {
        width: 20%;
        aspect-ratio: 1;
        border-radius: 50%;
        margin-top: 1rem;
    }
</style>
<template>
    <body id="user-page">
        <component :is="`style`">
            :root {
                --bkg-color : {{user.background_color}};
                --txt-color : {{user.text_color}};
            }
        </component>
        <div class="container-md d-flex flex-column align-items-center">
            <img class="avatar" :src="image_path" v-if="image_path !== null">
            <h1 v-text="username"></h1>
            <ul class="col-md-10 d-flex flex-column">
                <li
                    v-for="link in links"
                    :key="link.id"
                    class="d-flex"
                >
                    <a target="_blank" v-text="link.name" v-bind:href="link.link" @click="registerVisit(link.id)"></a>
                </li>
            </ul>
        </div>
    </body>
</template>
<script>
export default {
        data() {
            return {
                user: [],
                visit: {
                    id: '',
                    user_ip: '',
                    user_agent: ''
                }
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
            },
            registerVisit(id) {
                // Get the user IP
                axios.get('http://ip-api.com/json')
                    .then((response) => {
                        let userIP = response.data.query;
                        // Get the user agent
                        let userAgent = window.navigator.userAgent;

                        this.visit.id = id;
                        this.visit.user_ip = userIP;
                        this.visit.user_agent = userAgent;

                        axios.post('/api/link/visit', this.visit)
                            .then(_ => {})
                            .catch((error) => {
                                console.error(error);
                            })
                    })
            }
        },
        computed: {
            links() {
                return this.user.links;
            },
            username() {
                return "@"+this.user.username;
            },
            image_path() {
                if(this.user.image_path == null || this.user.image_path == '')
                {
                    return null;
                }

                return '../storage/'+this.user.image_path
            }
        }
    }
</script>
