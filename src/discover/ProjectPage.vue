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
              <a href="blog-single.html"
                >Discover <span class="mai-chevron-forward text-sm"></span
              ></a>
            </div>
          </div>
        </div>

        <div
          v-for="(a, i) in blog"
          :key="a"
          class="col-md-5 col-lg-3 py-3 wow fadeInUp">

          <div class="card-blog">
            <div class="body">
              <div class="card" style ="max-width : 300px; max-height : 200px;">
                <img :src="blog[i].image" />
                
              </div>

              <div class="post-title">
                <a>{{ blog[i].title }}</a>
              </div>
              <div class="post-excerpt">
                {{ blog[i].intro }}
              </div>
            </div>

            <div class="footer">
              
             
              <a href="blog-single.html"
                >Read More <span class="mai-chevron-forward text-sm"></span
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: 'Project Page',

  props: {
    blog: Array
  },

  components: { Navbar }
}
</script>

<style></style>
