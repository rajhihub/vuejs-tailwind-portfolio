<template>
  <Navbar />
  <Header />
  <Services />
  <About />

  <div class="bg-green-50 py-5 page-section">
    <div class="container">
      <div class="text-center wow fadeInUp">
        <div
          v-motion
          :initial="{ opacity: 0, y: 200 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="600"
          class="text-2xl mb-3">
          Pemerintahan Desa Wanaherang
        </div>
        <h3
          v-motion
          :initial="{ opacity: 0, y: 200 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="600"
          class="title-section">
          <span>"Visi</span>
          & Misi"
        </h3>
        <div class="divider mx-auto"></div>
      </div>

      <div
        class="flex flex-col lg:flex-row items-center justify-evenly space-x-3 h-full text-left py-5">
        <div
          v-motion
          :initial="{ opacity: 0, y: 200 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="500"
          class="bg-white rounded-xl drop-shadow-md mt-3 col-lg-4 ml-2 py-1 px-5 h-96 hover:-mt-3 cursor-default hover:shadow-lg hover:shadow-green-100">
          <lord-icon
            src="https://cdn.lordicon.com/dfxesbyu.json"
            trigger="hover"
            style="width: 150px; height: 150px"
            class="hidden lg:flex"></lord-icon>

          <div class="text-2xl font-semibold text-green-800 mt-4 pl-1">
           Visi
          </div>
          <p class="text-left text-base lg:text-sm leading-relaxed">
            Mewujudkan Desa Wanaherang yang lebih Maju, Sejahtera, Berkeadaban dan Bermartabat melalui peningkatan kemampuan Sumber Daya Manusia (SDM) sebagai insan pembangunan dan pemanfaatan Sumber Daya Alam (SDA) secara produktif, efektif dan efisien.
          </p>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, y: 200 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="800"
          class="bg-white rounded-xl mt-3 drop-shadow-md col-lg-4 ml-2 py-1 px-5 h-96 hover:-mt-3 cursor-default hover:shadow-lg hover:shadow-green-100">
          <lord-icon
            src="https://cdn.lordicon.com/xqgancly.json"
            trigger="hover"
            style="width: 150px; height: 150px"
            class="hidden lg:flex"></lord-icon>

          <div class="text-2xl font-semibold text-green-800 mt-4 pl-1">
            Misi
          </div>
          <p class="text-left text-base lg:text-sm leading-relaxed">
            Mewujudkan pelayanan publik yang professional, ramah dan tuntas dengan memanfaatkan teknologi dan informasi
Meningkatkan kualitas SDM bagi aparatur Pemerintahan Desa 
Mewujudkan tata kelola pemerintahan yang amanah, transparan dan taat terhadap peraturan
Mewujudkan pembangunan fisik dan non-fisik
Meningkatkan mutu layanan kesehatan melalui program gerakan desa sehat
Memperkuat sendi-sendi ekonomi melalui Padat Karya Tunai Desa (PKTD) dan penguatan kesehatan masyarakat melalui upaya pencegahan dan penanganan COVID-19
Meningkatkan kesadaran hukum masyarakat melalui program masyarakat sadar hukum
Meningkatkan potensi masyarakat dalam bidang pendidikan, keagamaan, kebudayaan, sosial dan olahraga
Mengembangkan perekonomian masyarakat melalui pemanfaatan potensi desa
Menggali potensi desa dalam rangka peningkatan Pendapatan Asli Desa
Mewujudkan peran serta pemuda untuk mengurangi Penyandang Masalah Kesejahteraan Sosial (PMKS) melalui Karang Taruna sebagai mitra Pemerintahan Desa
Memaksimalkan kinerja Badan Usaha Milik Desa (BUMDES) yang merupakan pilar ekonomi desa dan sebagai mitra perusahaan yang ada di lingkungan Desa Wanaherang.
          </p>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, y: 200 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="1000"
          class="bg-white rounded-xl drop-shadow-md mt-3 col-lg-4 ml-2 py-1 px-5 h-96 hover:-mt-3 cursor-default hover:shadow-lg hover:shadow-green-100">
          <lord-icon
            src="https://cdn.lordicon.com/hursldrn.json"
            trigger="morph"
            style="width: 150px; height: 150px"
            class="hidden lg:flex"></lord-icon>

          <div class="text-2xl font-semibold text-green-800 mt-4 pl-1">
            Sejarah
          </div>
          <p class="text-left text-base lg:text-sm leading-relaxed">
            Menurut cerita masyarakat dari mulut kemulut, bahwa pada sekitar pertengahan abad ke 18 Masehi, ada warga membuka hutan. Pada saat bekerja membuka hutan ia mencari air untuk minum. Setelah berjalan cukup lama dan berkeliling- keliling hutan maka sampailah pada satu tempat yang disana ada mata air yang jernih, yang airnya dapat diminum langsung. Keberadaan mata iir tersebut dari hari ke  hari semakin terkenal, maka lambat laun menjadi cerita dari mulut ke mulut ada air jenih (herang) di tengah hutan (wana). Mata air tersebut sangat jernih, atau "herang" kata orang sunda yang berada di tengah leuweung atau hutan atau "wana".

Mata air yang jernih ditengah hutan ini cikal bakal penamaan Wanaherang.
          </p>
        </div>
      </div>
    </div>
  </div>

  <Blog :blog="blog" />
  <Footer />
</template>

<script>
import Navbar from "./Navbar.vue";
import Header from "./Header.vue";
import Services from "./Services.vue";
import About from "./About.vue";
import Projects from "./Projects.vue";
import Contact from "./Contact.vue";
import Blog from "./Blog.vue";
import Footer from "./Footer.vue";

export default {
  name: "Home",
  data() {
    return {};
  },

  props: {
    blog: Array,
  },

  components: {
    Navbar,
    Header,
    Services,
    About,
    Projects,
    Contact,
    Blog,
    Footer,
  },
};
</script>

<style></style>
