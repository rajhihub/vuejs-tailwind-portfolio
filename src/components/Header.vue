<template>
  <header>
    <div class="page-banner home-banner">
      <div class="container h-100">
        <div class="row align-items-center h-100">
          <div class="col-lg-6 py-3 wow fadeInUp">
            <h1 class="mb-4">
              HI, IAM ANASKHON<br />Front-End Developer, Blockchain Engineer
            </h1>
            <p class="text-lg mb-5">
              I like to craft solid and scalable frontend products with great
              user experiences.
            </p>

            <router-link
              to="/about"
              name="fade"
              class="btn btn-outline border text-secondary"
              >About</router-link
            >
            <a href="#" class="btn btn-primary btn-split ml-2"
              >Download Resume
              <div class="fab"><span class="mai-play"></span></div
            ></a>
          </div>
          <div class="col-lg-6 py-3 wow zoomIn">
            <div class="img-place">
              <lottie-player
  src="https://assets2.lottiefiles.com/packages/lf20_gnb0jsok.json"
  background="transparent"
  speed="1"
  style="max-width: 500px; max-height: 500px"
  autoplay
></lottie-player>

            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style></style>
