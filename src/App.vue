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
  components: {}
}
</script>

<style>
</style>
