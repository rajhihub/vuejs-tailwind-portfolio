<template>
  <div class="bg-green-50 page-section pt-5 -mb-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 py-3 wow zoomIn">
        </div>

        <div class="col-lg-6 p-4">
          <h2
            v-motion
            :initial="{ opacity: 0, x: 200 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="400"
            class="title-section text-2xl">
            Sejarah
            <span class="marked">Desa</span>
          </h2>
          <div class="divider"></div>

          <div
            v-motion
            :initial="{ opacity: 0, y: 200 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="1000"
            v-scroll:#main="handleScroll">
            <p>
              Pada jaman penjajahan Belanda, mulai ada pembagian distrik atau wilayah,
              termasuk wilayah Kecamatan Gunungputri. Pada saat itu, Kecamatan Gunungputri
              hanya ada 9 Desa, yaitu Desa Gunungputri, Desa Tlajung Udik, Desa Cicadas,
              Desa Wanaherang, Desa Bojongnangka, Desa Cikeas udik, Desa Nagrak,
              Desa Ciangsana dan Desa Bojong Kulur. Baru kemudian, Desa Gunung Putri
              dimekarkan menjadi Desa Gunungputri dan Desa Karanggan. Jadi Jumlah Desa di kecamatan Gunungputri ada 10 Desa.

Desa Wanaherang merupakan Ibu kota Kecaamatan Gunungputri. Kantor Camatnya  di Desa Wanaherang, semula tepatnya di Kampung Cikuda, di rumah atau bangunan tempat peninggalan Belanda, kemudian berpindah ke Kampung Tlajung, Jalan Raya Wanaherang RT 01 RW.02 sampai dengan tahun 1995. Pada Tahun 1996, Kantor Kecamatan Gunungputri pindah ke Kampung Parungdengdek Rt 02 RW.011 sampai saat ini. Hal ini menjadikan desa Wanaherang memiliki posisi yang strategis, karena sebagai ibu kota kecamatan.

Secara Administratif, Desa Wanaherang terdiri dari Dusun I Kampung Tlajung, Dusun II Kampung Jampang, Dusun III Kampung Cikuda dan Kampung Rawa Bejog, Dusun IV Kampung Wanaherang, Dusun V Kampung Parungdengdek.

Dusun I Kampung Tlajung terdiri dari 3 wilayah rukun warga (RW), yang didalamnya ada 14 rukun tetangga (RT). Dusun II, Kampung Jampang terbagi menjadi dua wilayah, yakni Kampung Jampang, dan perumahan Legenda Wisata. Kampung Jampang terdiri 2 rukun warga yang didalamnya ada 7 rukun tetangga (RT), dan komplek perumahan Legenda Wisata dibagi menjadi 13  rukun warga (RW), yang didalamnya ada  58  rukun tetenagga (RT). Dusun III, Kampung Cikuda terdiri dari 3 rukun warga (RW) yang didalamnya ada 11 rukun tetangga (RT). Dusun III, Kampung Wanaherang terdiri dari 2 rukun warga (RW) yang didalamnya ada 6 rukun tetangga (RT), dan Kampung Parungdengdek terdiri dari 3 rukun warga (RW), yang didalamnya ada 10 Rukun tetangga (RT).
            </p>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, y: 200 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="1200">
            <p>
            
            </p>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, y: 200 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="1400">
            <p class="hidden lg:flex">
          
            </p>
          </div>

          <div class="img-place mb-3"></div>
          <a href="#" class="btn btn-primary"> </a>
          <a href="#" class="btn btn-outline border ml-2"> </a>
        </div>
      </div>
    </div>
    <!-- .container -->
  </div>
  <!-- .page-section -->

  <div class="bg-green-50 page-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 p-4 -mt-9 lg:mt-0">
          <h2
            v-motion
            :initial="{ opacity: 0, x: 150 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="1000"
            class="title-section text-2xl">
            My
            <span class="marked">Skills & Experiences</span>
          </h2>
          <div class="divider"></div>
          <p
            v-motion
            :initial="{ opacity: 0, y: 200 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="1200"
            class="mb-4">
            
          </p>
          <p
            v-motion
            :initial="{ opacity: 0, y: 200 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="1200"
            class="mb-4">
           
          </p>

          <p
            v-motion
            :initial="{ opacity: 0, y: 200 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="1400"
            class="mb-5 hidden lg:flex">
          
          </p>

          <router-link
            v-motion
            :initial="{ opacity: 0, x: 300 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="600"
            to="/blog"
            class="btn btn-primary">
            My Blogs
          </router-link>
          <router-link
            v-motion
            :initial="{ opacity: 0, x: 300 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="600"
            to="/projects"
            class="btn btn-outline ml-2">
            My Projects
          </router-link>
        </div>
        <div class="col-lg-6 py-3 wow zoomIn">
          
        </div>
      </div>
    </div>
    <!-- .container -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: 0,
    };
  },

  methods: {
    handleScroll(e) {
      this.scrollPosition = e.target.scrollTop;

      if (this.scrollPosition > 100) {
        console.log("UP");
      } else {
        console.log("DOWN");
      }
    },
  },
};
</script>

<style></style>
