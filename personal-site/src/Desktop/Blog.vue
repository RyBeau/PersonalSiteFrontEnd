<template>
  <div class="container p-5">
    <div v-for="post in blogPosts" class="card mb-3 mx-auto blog-card">
      <div class="card-body position-absolute">
        <h4 class="card-title mb-1">{{post.title}}
          <span v-if="givePill(post.date)" class="badge badge-pill badge-primary">New!</span>
        </h4>
        <h6 class="card-subtitle text-muted">{{post.subtitle}}</h6>
        <hr class="my-2">
        <h6>Date Posted: {{post.date}}</h6>
        <h6>Author: {{post.username}}</h6>
      </div>
      <a href="#" class="stretched-link"></a>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
    export default {
        name: "Blog",
      data() {
        return {
          //Temp data for testing
          blogPosts: [
            {
              title: "My First blog post",
              subtitle: "For testing purposes",
              date: "19/07/2020",
              username: "RyBeau"
            },
            {
              title: "My Second blog post",
              date: "16/06/2020",
              username: "RyBeau"
            },
            {
              title: "My Third blog post",
              subtitle: "For testing purposes",
              date: "15/06/2020",
              username: "RyBeau"
            }
          ]
        }
      },
      methods: {
          //Decides if a blog post is new enough to receive a pill
          givePill: function (date) {
            const currentDate = moment();
            const postDate = moment(date, "DD/MM/YYYY");
            return currentDate.diff(postDate, 'days') <= 7;
          }
      }
    }
</script>

<style scoped>

</style>
