<template>
  <Navbar />

  <div class="">

  <div class="hidden lg:block container ">    
    <div class="page-banner1 bg-green-50">
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
          <p class="text-center text-2xl font-semibold text-green-600">MyProject</p>
          <div class="divider mx-auto"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="page-section bg-green-50">
    <div class="container">
      <div class="row my-5 card-blog-row">
        <div class=" relative lg:hidden col-md-6 col-lg-3 py-3 wow fadeInUp">
          
          <div class=" card-blog">
            <div class="header">
              <div class="entry-footer">
                <div class="post-author">Welcome to the Projects</div>
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

          </div>
        </div>

        <div
          v-for="(a, i) in project"
          :key="a"
          class="col-md-5 col-lg-3 py-3 bg-white "
        >
          <div class="flex flex-col space-y-4  h-96">
            <div class="h-48 rounded-t-lg overflow-hidden">
              <img class=" h-48 w-96" :src="project[i].image" />
            </div>

            <div class="flex flex-col ml-2 ">
              <div class="text-xl font-medium text-green-600 mb-2">
                <a>{{ project[i].name }}</a>
              </div>
              <div class="text-base text-gray-700 mb-2">
                {{ project[i].content }}
              </div>
            </div>

            <div class="flex flex-row my-3 mx-2 ">
              <div class="flex flex-row items-start py-3 px-2 space-x-3 " style="padding-bottom: 25px">
                <img :src="project[i].tech1" />
                <img :src="project[i].tech2" />
                <img :src="project[i].tech3" />
              </div>
            </div>
          </div>
              <button class="btn" @click="$router.push(`/singleproject/` + i)">
                Learn More <span class="mai-chevron-forward text-sm"></span>
              </button>
        </div>
      </div>
    </div>
  </div>

  <Footer />

  </div>
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

  components: { Navbar, Services, Footer }
}
</script>

<style></style>
