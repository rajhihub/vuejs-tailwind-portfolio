<template>
  <Navbar />

  <div class="container mt-5">
    <div class="page-banner1">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-md-6">
          <nav aria-label="Breadcrumb">
            <ul class="breadcrumb justify-content-center py-0 bg-transparent">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item active">Projects</li>
            </ul>
          </nav>
          <h1 class="text-center">MyProject</h1>
          <div class="divider mx-auto"></div>
        </div>
      </div>
    </div>
  </div>

  <Services/>

  <div class="page-section">
    <div class="container">
      <div class="row my-5 card-blog-row">
        <div class="col-md-6 col-lg-3 py-3 wow fadeInUp">
          <div class="card-blog">
            <div class="header">
              <div class="entry-footer">
                <div class="post-author">Welcome to the Blogs</div>
                <a href="#" class="post-date"></a>
              </div>
            </div>
            <div class="body">
              <div class="post-title">
                <a
                  >Share My Knowledge <br />Research Skills <br />Makes More
                  Employable
                </a>
              </div>
            </div>
            <div class="footer">
              <router-link to="/projects"
                >Discover <span class="mai-chevron-forward text-sm"></span
              ></router-link>
            </div>
          </div>
        </div>

        <div
          v-for="(a, i) in project"
          :key="a"
          class="col-md-5 col-lg-3 py-3 wow fadeInUp"
        >
          <div class="card-blog">
            <div
              class="card"
              style="
                
                max-width: 320px;
                max-height: 200px;
               
              "
            >
              <img :src="project[i].image" />
            </div>

            <div class="body">
              <div class="post-title">
                <a>{{ project[i].name }}</a>
              </div>
              <div class="post-excerpt">
                {{ project[i].content }}
              </div>
            </div>

            <div class="footer">
              <div class="techs" style="padding-bottom: 25px;">
                <img :src="project[i].tech1" />
                <img :src="project[i].tech2" />
                <img :src="project[i].tech3" />
              </div>
              <router-link to='/singleproject' 
                >Learn More <span class="mai-chevron-forward text-sm"></span
              ></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer/>

</template>

<script>
import ProjectData from '../data/projects.js'

import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Footer from '../components/Footer'



export default {
  name: 'Project Page',
  data () {
    return {
      project: ProjectData
    }
  },

  props: {
    blog: Array
  },

  components: { Navbar,Services, Footer }
}
</script>

<style></style>
