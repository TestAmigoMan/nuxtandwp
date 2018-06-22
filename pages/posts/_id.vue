<template>
    <div class="post">
        <div class="parallax-container">>
            <div class="parallax"><img src="~assets/blog/posts/default.jpg"></div>
        </div>
        <div class="section white">
            <div class="row container">
                <h2 class="header">{{ post.title.rendered }}</h2>
                <p class="grey-text text-darken-3 lighten-3">
                    {{ post.body }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    const url = 'https://jsonplaceholder.typicode.com/posts/1';

    export default {
        validate ({ params }) {
            // Должен быть числом
            return /^\d+$/.test(params.id)
        },
        head() {
            return {
                title: this.post.title
            }
        },
        data() {
            return {
                post: null
            }
        },
        asyncData ({ params, error }) {
            return axios.get('http://kinogowordpress.loc/wp-json/wp/v2/posts/1')  //('https://jsonplaceholder.typicode.com/posts/' + params.id)
                .then((res) => {
                    console.log(res)
                    return {
                         post: res.data
                    }
                })
                .catch((e) => {
                    error({ statusCode: 404, message: 'Страница не найдена ;)' })
                })
        },
        mounted() {
            $('.parallax').parallax();
        }
    }
</script>

<style scoped>
    .parallax img {
        opacity: 1;
    }
</style>