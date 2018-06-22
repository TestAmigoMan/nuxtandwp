<template>
  <div>
      <posts :posts="posts"></posts>
  </div>
</template>

<script>
    import Posts from '~/components/blog/posts';
    import axios from 'axios';

    export default {
        components: {
            Posts
        },
        async asyncData ({ params }) {
            let { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
            return { posts: data }
        }
    }
</script>

<style>

</style>
