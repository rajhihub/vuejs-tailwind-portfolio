<template>
  <div class="page-section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 py-3 wow fadeInUp">
          <h2 class="title-section">Kontak Informasi</h2>
          <div class="divider"></div>
          <p>
            Email : wanaherang.desa@gmail.com
            <br />
            Website : www.wanaherang.desa.id
          </p>

          <ul class="contact-list">
            <li>
              <div class="icon"><span class="mai-map"></span></div>
              <div class="content">Jl. Melati No.15 Desa Wanaherang</div>
            </li>
            <li>
              <div class="icon"><span class="mai-mail"></span></div>
              <div class="content"><a href="#">wanaherang.desa@gmail.com</a></div>
            </li>
            <li>
              <div class="icon"><span class="mai-phone-portrait"></span></div>
              <div class="content"><a href="#">+6282233327722</a></div>
            </li>
          </ul>
        </div>
        <div class="col-lg-6 py-3 wow fadeInUp">
          <div class="subhead">Kontak kami</div>
          <h2 class="title-section"></h2>
          <div class="divider"></div>

          <form action="#">
            <div class="py-2">
              <input type="text" class="form-control" placeholder="Full name" />
            </div>
            <div class="py-2">
              <input type="text" class="form-control" placeholder="Email" />
            </div>
            <div class="py-2">
              <textarea
                rows="6"
                class="form-control"
                placeholder="Enter message"></textarea>
            </div>
            <button type="submit" class="btn btn-primary rounded-pill mt-4">
              Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
    <!-- .container -->
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

export default {
  name: "Contact",

  components: {
    Navbar: Navbar,
    Footer: Footer,
  },
};
</script>

<style></style>
