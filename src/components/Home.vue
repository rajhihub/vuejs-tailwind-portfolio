<template>
  <Navbar />
  <Header />
  <Services />
  <About />

  <div class="page-section">
    <div class="container">
      <div class="text-center wow fadeInUp">
        <div class="text-2xl mb-3">Personality as Developer</div>
        <h3 class="title-section">
          <span class="marked">"Slow and Steady </span>Win The Rase"
        </h3>
        <div class="divider mx-auto"></div>
      </div>

      <div class="row mt-5 text-center">
        <div class="col-lg-4 p-3">
          <lord-icon
            src="https://cdn.lordicon.com/dfxesbyu.json"
            trigger="hover"
            style="width: 150px; height: 150px"
          >
          </lord-icon>

          <h5 >Problem Solving</h5>
          <p class="text-center text-base lg:text-sm">
            In my opinion In software development, problem-solving is a one of
            the most important part of the work. Problem-solving also has to do
            with utilizing creativity and logical thought processes to identify
            problems and resolve them with software.
          </p>
        </div>
        <div class="col-lg-4 py-3 wow fadeInUp">
          <lord-icon
            src="https://cdn.lordicon.com/xqgancly.json"
            trigger="hover"
            style="width: 150px; height: 150px"
          >
          </lord-icon>

          <h5>Quick Learning</h5>
          <p class="text-center text-base lg:text-sm">
            And I also think Best software developers are often fantastic
            self-learners.The ideal skill any person can have is understanding
            how to learn, and ideal developers have acquired the skill of
            self-learning.
          </p>
        </div>
        <div class="col-lg-4 py-3 wow fadeInUp">
          <lord-icon
            src="https://cdn.lordicon.com/hursldrn.json"
            trigger="morph"
            style="width: 150px; height: 150px"
          >
          </lord-icon>

          <h5>Honesty</h5>
          <p class="text-center text-base lg:text-sm">
            Software developers need to learn to admit their mistakes. Of
            course, making a mistake occurs to all of us. The most important
            thing to do is to make an effort to learn from them and try to avoid
            them later in life.
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
