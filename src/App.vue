<template>
<router-view :blog = "blog" />
</template>

<script>

import Blog from './data/data.js';
import ProjectData from './data/projects.js';


export default {
  name: 'App',
  data() {
    return {
      blog : Blog,
      project: ProjectData,
    }
  },
  components: {},

  mounted () { window.scrollTo(0, 0) }

}



</script>

<style>
</style>
