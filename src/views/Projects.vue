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
    <div class="col-lg shadow border p-5 overflow-auto" style="height: 82vh">
      <h1 id="projectViewTitle"></h1>
      <hr class="my-1">
        <ul class="list-inline my-0">
          <li class="list-inline-item px-1"><h6 id="projectViewAuthor"></h6></li>
          <li class="list-inline-item px-1"><h6><a id="projectViewRepo" href="" target="_blank">Repository</a></h6></li>
        </ul>
      <hr class="my-2">
      <div class="card shadow border mb-2">
        <h5 class="card-header">README.md</h5>
        <div markdown id='projectViewDesc' class="card-body p-5"> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked';
    export default {
        name: "Projects",
      data() {
        return {
          //Temporary test data
          projects: [
            {
              title: "Artificial Intelligence Assignment 1",
              repository: "RyBeau/AIAssignment1",
              username: "RyBeau"
            },
            {
              title: "Python RIP Router",
              repository: "RyBeau/COSC364Assignment",
              username: "RyBeau"
            },
            {
              title: "C++ OpenGL Project",
              repository: "RyBeau/OpenGLProject1",
              username: "RyBeau"
            },
            {
              title: "C++ OpenGL Ray Tracing",
              repository: "RyBeau/COSC363RayTracingProject",
              username: "RyBeau"
            },
            {
              title: "Simon Says Game",
              repository: "RyBeau/SimonSaysGame",
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
            document.getElementById("projectViewRepo").setAttribute("href", "https://github.com/" +
              this.projects[position].repository);
            this.getReadme(position);
            },
            getReadme: async function (position) {
            //Get the raw readme from the repo and convert it to html.
            const raw = await this.axios.get('https://raw.githubusercontent.com/' + this.projects[position].repository + "/master/README.md")
            .then((response) => {return response});
            const markdown = marked(raw.data, {santize: true});
            document.getElementById("projectViewDesc").innerHTML = markdown;
          }          
      }
    }
</script>

<style scoped>

</style>
