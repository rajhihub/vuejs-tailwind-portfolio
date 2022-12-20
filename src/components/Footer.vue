<template>
  <footer class="page-footer">
    <div class="container">
      <div class="row justify-content-center mb-5">
        <div class="col-lg-3 py-3">
          <h3>Personal<span class="text-primary">Portfolio</span></h3>
          <p>
            Great genius takes shape by contact with another great genius,
            <br />
            but, less by assimilation than by friction.
          </p>

          <p><a>aaron08889@gmail.com</a></p>
          <p><a href="#">+8210 5818 2222</a></p>
        </div>
        <div class="col-lg-3 py-3">
          <h5>Quick Links</h5>
          <ul class="footer-menu">
            <li class="nav-item active">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/projects" class="nav-link"
                >Projects</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/blog" class="nav-link">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link to="contact" class="nav-link">Contact</router-link>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 py-3">
          <h5>Blogs</h5>
          <ul v-for ="(a,i) in blog" :key ="a" class="footer-menu">
            <li><a>{{blog[i].title}}</a></li>
            
          </ul>
        </div>
        <div class="col-lg-3 py-3">
          <h5>Subscribe</h5>
          <form action="#">
            <input
              type="text"
              class="form-control"
              placeholder="Enter your mail.."
            />
          </form>

          <div class="sosmed-button mt-4">
            <a href="#"><span class="mai-logo-facebook-f"></span></a>
            <a href="#"><span class="mai-logo-twitter"></span></a>
            <a href="#"><span class="mai-logo-google"></span></a>
            <a href="#"><span class="mai-logo-linkedin"></span></a>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6 py-2">
          <p id="copyright">
            &copy; 2020 <a href="https://macodeid.com/">MACode ID</a>. All
            rights reserved
          </p>
        </div>
        <div class="col-sm-6 py-2 text-right">
          <div class="d-inline-block px-3">
            <a href="#">Privacy</a>
          </div>
          <div class="d-inline-block px-3">
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
    <!-- .container -->
  </footer>
</template>

<script>
export default {
  props : {
    blog: Array,
  }
}
</script>

<style></style>
