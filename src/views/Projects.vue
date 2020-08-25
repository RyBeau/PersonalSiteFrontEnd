<template>
  <div class="row mx-auto container p-5">
    <div class="col- p-4 shadow overflow-auto border" style="height: 82vh">
          <div v-for="(project, position) in projects" v-bind:key="project.repository" class="card mb-3 mx-auto project-card">
            <div class="card-body position-absolute">
              <h4 class="card-title">{{project.title}}</h4>
              <h6 class="card-subtitle text-muted">{{project.subtitle}}</h6>
              <h6>Author: {{project.username}}</h6>
            </div>
            <a ref="#" v-on:click="updateDisplayed(position)" class="stretched-link"></a>
          </div>
    </div>
    <div class="col-lg overflow-auto shadow border p-5">
      <h1 id="projectViewTitle"></h1>
      <hr class="my-1">
        <ul class="list-inline my-0">
          <li class="list-inline-item px-1"><h6 id="projectViewAuthor"></h6></li>
          <li class="list-inline-item px-1"><h6><a id="projectViewRepo" href="" target="_blank">Repository</a></h6></li>
        </ul>
      <hr class="my-1">
      <p id="projectViewDesc"></p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Projects",
      data() {
        return {
          //Temporary test data
          projects: [
            {
              title: "Test Project 1",
              description: "This is a test project for design the front end layout of the website." +
                "The text here is for nothing more than helping choose the correct layout for the project page.",
              repository: "www.github.com/rybeau",
              username: "RyBeau"
            },
            {
              title: "Test Project 2",
              description: "This is a test project for design the front end layout of the website." +
                "The text here is for nothing more than helping choose the correct layout for the project page.",
              repository: "www.github.com/rybeau",
              username: "RyBeau"
            },
            {
              title: "Test Project 3",
              description: "This is a test project for design the front end layout of the website." +
                "The text here is for nothing more than helping choose the correct layout for the project page.",
              repository: "www.github.com/rybeau",
              username: "RyBeau"
            },
            {
              title: "Test Project 4",
              description: "This is a test project for design the front end layout of the website." +
                "The text here is for nothing more than helping choose the correct layout for the project page.",
              repository: "www.github.com/rybeau",
              username: "RyBeau"
            },
            {
              title: "Test Project 5",
              description: "This is a test project for design the front end layout of the website." +
                "The text here is for nothing more than helping choose the correct layout for the project page.",
              repository: "www.github.com/rybeau",
              username: "RyBeau"
            },
            {
              title: "Test Project 6",
              description: "This is a test project for design the front end layout of the website." +
                "The text here is for nothing more than helping choose the correct layout for the project page.",
              repository: "www.github.com/rybeau",
              username: "RyBeau"
            }
          ]
        }
      },
      mounted() {
          this.updateDisplayed(0);
      },
      methods: {
          //Updated view window to the most recently selected project
          updateDisplayed: function (position) {
            document.getElementById("projectViewTitle").innerText = this.projects[position].title;
            document.getElementById("projectViewAuthor").innerText = "Author: " + this.projects[position].username;
            document.getElementById("projectViewRepo").setAttribute("href", "https://" +
              this.projects[position].repository);
            document.getElementById("projectViewDesc").innerText = this.projects[position].description;
          }
      }
    }
</script>

<style scoped>

</style>
