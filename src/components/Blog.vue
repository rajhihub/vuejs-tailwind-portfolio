<template>
  <div class="bg-green-50 page-section py-5">
    <div class="container">
      <div class="text-center wow fadeInUp">
        <div
          v-motion
          :initial="{ opacity: 0, y: 200 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="700"
          class="mt-2 subhead">
          Berita Populer
        </div>
        <h2
          v-motion
          :initial="{ opacity: 0, y: 200 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="700"
          class="title-section">
          Kegiatan
          <span class="">Berita</span>
        </h2>
        <div class="divider mx-auto"></div>
      </div>

      <div class="row my-5 card-blog-row">
        <div class="col-md-6 col-lg-3 py-3 wow fadeInUp hover:-mt-3">
          <div
            v-motion
            :initial="{ opacity: 0, y: 200 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="700"
            class="card-blog">
            <div class="header">
              <div class="entry-footer">
                <div class="post-author">Selamat datang di Web Resmi Pemerintah Desa Wanaherang</div>
                <a href="#" class="post-date"></a>
              </div>
            </div>
            <div class="body">
              <div class="post-title">
                <a>
                  -Ceras
                  <br />
                  - Bermartabat
                  <br />
                  - Religius
                </a>
              </div>
            </div>
            <div class="footer"></div>
          </div>
        </div>

        
        
      </div>

      <div class="text-center pb-5">
        <router-link
          to="https://vueblog-13514.web.app/"
          class="btn btn-outline-primary rounded-pill">
          Desa Wanaherang
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blog: Array,
  },
};
</script>

<style></style>
