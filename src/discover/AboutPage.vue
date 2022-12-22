<template>

<Navbar/>

  <div class="container mt-5">
      <div class="page-banner1">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-md-6">
            <nav aria-label="Breadcrumb">
              <ul class="breadcrumb justify-content-center py-0 bg-transparent">
                <li class="breadcrumb-item"><router-link to ='/'>Home</router-link></li>
                <li class="breadcrumb-item active">About</li>
              </ul>
            </nav>
            <h1 class="text-center">About Us</h1>
          </div>
        </div>
      </div>
    </div>


<About/>
<Services/>

<div class="page-section">
    <div class="container">
      <div class="text-center wow fadeInUp">
        <div class="subhead">Personality as Developer</div>
        <h3 class="title-section">
          <span class="marked">"Slow and Steady </span>win the Rase"
        </h3>
        <div class="divider mx-auto"></div>
      </div>

      <div class="row mt-5 text-center">
        <div class="col-lg-4 py-3 wow fadeInUp">
          <lord-icon
            src="https://cdn.lordicon.com/dfxesbyu.json"
            trigger="hover"
            style="width: 150px; height: 150px"
          >
          </lord-icon>

          <h5>Problem Solving</h5>
          <p>
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
          <p>
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
          <p>
            Software developers need to learn to admit their mistakes. Of
            course, making a mistake occurs to all of us. The most important
            thing to do is to make an effort to learn from them and try to avoid
            them later in life.
          </p>
        </div>
      </div>
    </div>
  </div>

  <Footer :blog ="blog" />

    
</template>

<script>

import Navbar from '../components/Navbar';
import About from '../components/About';
import Services from '../components/Services';
import Footer from '../components/Footer';


export default {
    name : 'About Page',
    data(){
        return  {
        }
    },

    props : {
        blog : Array,
    },

    components : {
        Navbar,
        About,
        Services,
        Footer,

    }

}
</script>

<style>

</style>
