<template>
  <Navbar />

  <div class="page-section pt-5" style="margin-top: 100px">
    <div class="container">
      <nav aria-label="Breadcrumb">
        <ul class="breadcrumb p-0 mb-0 bg-transparent">
          <li class="breadcrumb-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/projects">All Projects</router-link>
          </li>
          <li class="breadcrumb-item active">Projects</li>
        </ul>
      </nav>

      <div class="row">
        <div class="col-lg-8">
          <div class="blog-single-wrap">
            <div class="header">
              <div class="post-thumb">
                <img :src="project[3].image" alt="" />
              </div>
              <div class="meta-header"></div>
            </div>
            <h1 class="post-title">{{[$route.params.id].name }}</h1>
            <br />

            <div class="post-meta">
              <div class="post-date">
                <span class="icon" style="margin-right: 10px">
                  <span class="mai-time-outline"></span>
                </span>
                <a>{{ project[3].content }}</a>
              </div>
            </div>

            <div class="post-content">
             
             
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="widget">
            <!-- Widget search -->
            <div class="widget-box">
              <form action="#" class="search-widget">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter keyword.."
                />
                <button type="submit" class="btn btn-primary btn-block">
                  Search
                </button>
              </form>
            </div>

            <!-- Widget Categories -->
            <div class="widget-box">
              <h4 class="widget-title">Tech</h4>
              <div class="divider"></div>

              <ul class="categories">
                <img :src="project[0].tech1" />
                <img :src="project[0].tech2" />
                <img :src="project[0].tech3" /><br />
                <img :src="project[1].tech3" />
                <img :src="project[1].tech2" />
                <img :src="project[2].tech3" />

                <li><a>FrontEnd</a></li>
                <li><a>Web Application</a></li>
                <!-- <li><a href="#">Healthy</a></li>
                  <li><a href="#">Sports</a></li>
                  <li><a href="#">Entertainment</a></li> -->
              </ul>
            </div>

            <!-- Widget recent post -->
            <div class="widget-box">
              <h4 class="widget-title">Next Projects</h4>
              <div class="divider"></div>

              <div v-for="(a, i) in 3" :key="a" class="blog-item">
                <a class="post-thumb" href="">
                  <img :src="project[a].image" alt="" />
                </a>
                <div class="content">
                  <h6 class="post-title">
                    <a>{{ project[a].name }}</a>
                  </h6>
                  <div class="meta">
                    <a href="#"
                      ><span class="mai-calendar"></span
                      >{{ project[a].content }}</a
                    >
                    <!-- <a href="#"><span class="mai-person"></span> Admin</a>
                        <a href="#"><span class="mai-chatbubbles"></span> 19</a> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script>
import ProjectData from '../data/projects.js'
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'


export default {
  name: 'Single Project Page',
  data () {
    return {
      project: ProjectData
    }
  },
  props: {
    blog: Array
  },
  components: {
    Navbar,
    Footer,
    
  }
}
</script>

<style></style>
