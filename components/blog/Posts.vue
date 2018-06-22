<template>
    <div class="row">
        <div v-if="hasPosts" v-for="post in posts" :key="post.id" class="col s12 m6 l4">
            <div class="card">
                <div class="card-image">
                    <img src="~assets/blog/posts/default.jpg">
                    <span class="card-title truncate">{{post.title}}</span>
                </div>
                <div class="card-content">
                    <p>{{post.body}}</p>
                </div>
                <div class="card-action">
                    <nuxt-link :to="{ path: '/posts/' + post.id }">
                        See more <i class="fa fa-angle-double-right"></i>
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div v-else class="flow-text">
            The posts not found
        </div>
    </div>
</template>

<script>
    export default {
        props: ['posts'],
        computed: {
            hasPosts() {
                return this.posts !== undefined && this.posts.length > 0
            }
        }
    }
</script>

<style scoped>

</style>