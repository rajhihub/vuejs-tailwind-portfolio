<template>
  <nav class="navbar navbar-expand-lg navbar-light navbar-float">
    <div class="container">
      <a class="navbar-brand">My<span class="text-primary">Portfolio</span></a>


      <div class="navbar-collapse collapse" id="navbarContent">
        
          <ul class="navbar-nav ml-lg-4 pt-3 pt-lg-0">
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
              <router-link to="/contact" class="nav-link">Contact</router-link>
            </li>
          </ul>
      

        <div class="ml-auto">
          <a href="#" class="btn btn-primary">Korean</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      active: 0
    }
  },
  methods: {
    inActive () {
      this.active += 1
    }
  }
}
</script>

<style>
.fade-nav-enter-active,
.fade-nav-leave-active {
  transition: opacity 0.5s ease;
}

.fade-nav-enter-from,
.fade-nav-leave-to {
  opacity: 0;
}
</style>
