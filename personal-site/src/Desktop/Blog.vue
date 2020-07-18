<template>
  <div class="container p-5">
    <div v-for="post in blogPosts" class="card mb-3 mx-auto grow shadow-transition">
      <div class="card-body position-absolute">
        <h4 class="card-title">{{post.title}}
          <span v-if="post.new === true" class="badge badge-pill badge-primary">New!</span>
        </h4>
        <h6 class="card-subtitle text-muted">{{post.subtitle}}</h6>
        <h6>Date Posted: {{post.date}}</h6>
        <h6>Author: {{post.username}}</h6>
        <a href="#" class="stretched-link"></a>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
    export default {
        name: "Blog",
      data() {
        return {
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
      mounted() {
          this.givePill()
      },
      methods: {
          //Decides if a blog post is new enough to receive a pill
          givePill: function () {
            for (let i = 0; i < this.blogPosts.length; i++){
              this.blogPosts[i].new = moment().diff(moment(this.blogPosts[i].date, "DD/MM/YYYY"), 'days') <= 7
            }
            this.$forceUpdate();
          }
      }
    }
</script>

<style scoped>

</style>
