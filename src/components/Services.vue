<template>
  <div class="bg-green-50 hidden lg:flex lg:items-center lg:justify-center">
    <div class="bg-green-50 page-section features">
      <div class="container">
        <div class="row justify-content-center">
          <div
            v-motion
            :initial="{ opacity: 0, x: -150 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="1000"
            class="col-md-6 col-lg-4 py-3 wow fadeInUp">
            <div class="d-flex flex-row">
              <div>
                <h>Poktan Desa Wanaherang</h>
                <p>
                Ketahanan Pangan dengan konsep Hidroponik
                </p>
              </div>
            </div>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, y: 150 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="1200"
            class="col-md-6 col-lg-4 py-3 wow fadeInUp">
            <div class="d-flex flex-row">
              <div class="">
                
              </div>
              <div>
                <h4>PKK</h4>
                <p>
                 memiliki Kader yang sangat solid danlam semua kegiatan yang menunjang PKK desa wanaherang 
    
                </p>
              </div>
            </div>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, x: 150 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="1400"
            class="col-md-6 col-lg-4 py-3 wow fadeInUp">
            <div class="d-flex flex-row">
              
              <div>
                <h5>Karang Taruna</h5>
                <p>
                 karang Taruna Desa Wanaherang yang aktif di masyarakat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
