<template>
  <Navbar />
  <Header />
  <Services />
  <About />

  <div class=" bg-purple-50 pt-5 page-section">
    <div class="container">
      <div class="text-center wow fadeInUp">
        <div class="text-2xl mb-3">Personality as Developer</div>
        <h3 class="title-section">
          <span class="marked">"Slow and Steady </span>Win The Rase"
        </h3>
        <div class="divider mx-auto"></div>
      </div>

      <div class="flex flex-row items-center justify-evenly space-x-3 h-full text-left py-5">
        
        <div class=" bg-red-50 rounded-xl drop-shadow-md col-lg-4 py-1 px-5 h-96 hover:-mt-3">
          <lord-icon
            src="https://cdn.lordicon.com/dfxesbyu.json"
            trigger="hover"
            style="width: 150px; height: 150px"
          >
          </lord-icon>

          <div class="text-2xl font-semibold text-green-600 pl-1">Quick Learning</div>
          <p class="text-left text-base lg:text-sm">
           And I also think Best software developers are often fantastic
            self-learners.The ideal skill any person can have is understanding
            how to learn, and ideal developers have acquired the skill of
            self-learning.
          </p>
        </div>

         <div class=" bg-green-50 rounded-xl drop-shadow-md col-lg-4 py-1 px-5 h-96 hover:-mt-3">
          <lord-icon
            src="https://cdn.lordicon.com/xqgancly.json"
            trigger="hover"
            style="width: 150px; height: 150px"
          >
          </lord-icon>

          <div class="text-2xl font-semibold text-green-600 pl-1">Problem Solving</div>
          <p class="text-left text-base lg:text-sm">
            Problem-solving is a one of the most important part of the work. Problem-solving also has to do
            with utilizing creativity and logical thought processes to identify
            problems and resolve them with software.
          </p>
        </div>

         <div class=" bg-blue-50 rounded-xl drop-shadow-md col-lg-4 py-1 px-5 h-96 hover:-mt-3">
          <lord-icon
            src="https://cdn.lordicon.com/hursldrn.json"
            trigger="morph"
            style="width: 150px; height: 150px"
          >
          </lord-icon>

          <div class="text-2xl font-semibold text-green-600 pl-1">Honesty</div>
          <p class="text-left text-base lg:text-sm">
            In my opinion In software development, problem-solving is a one of
            the most important part of the work. Problem-solving also has to do
            with utilizing creativity and logical thought processes to identify
            problems and resolve them with software.
          </p>
        </div>


      </div>
    </div>
  </div>

  <Blog :blog = "blog"/>
  <Contact />
  <Footer  :blog = "blog"/>
</template>

<script>
import Navbar from './Navbar.vue'
import Header from './Header.vue'
import Services from './Services.vue'
import About from './About.vue'
import Projects from './Projects.vue'
import Contact from './Contact.vue'
import Blog from './Blog.vue'
import Footer from './Footer.vue'

export default {
  name: 'Home',
  data(){
    return {

    }
  },

  props: {
    blog: Array,
  },

  components: {
    Navbar,
    Header,
    Services,
    About,
    Projects,
    Contact,
    Blog,
    Footer,
  }
}
</script>

<style></style>
