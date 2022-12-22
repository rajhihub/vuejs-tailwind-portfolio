<template>

<nav class="navbar navbar-expand-lg navbar-light navbar-float">
      <div class="container">
        <a  class="navbar-brand">My<span class="text-primary">Portfolio</span></a>

        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse" id="navbarContent">
          <ul class="navbar-nav ml-lg-4 pt-3 pt-lg-0">
            <li class="nav-item active">
              <router-link to='/' class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
             <router-link to='/about'  class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to='/projects' class="nav-link">Projects</router-link>
            </li>
            <li class="nav-item">
             <router-link to='/blog' class="nav-link">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link to='contact' class="nav-link">Contact</router-link>
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
  data(){
    return {
      active : 0,
    }
  },
  methods : {
    inActive() {
      this.active +=1;
    }

  },


}
</script>

<style>

</style>
