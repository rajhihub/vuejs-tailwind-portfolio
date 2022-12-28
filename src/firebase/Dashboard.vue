<template>
  <Navbar />

  <div class="container mt-5">
    <div class="page-banner1">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-md-6">
          <nav aria-label="Breadcrumb">
            <ul class="breadcrumb justify-content-center py-0 bg-transparent">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item active">Dashboard</li>
            </ul>
          </nav>
          <h1 class="text-center">Login Info</h1>
          <div id="firebase-auth-container"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

export default {
  components: {
    Navbar
  },

  methods: {
    initUI: function () {
      ui.start('#firebase-auth-container', {
        signInoptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
        callbacks: {
          signInSuccessWithAuthResult: (authResult, redirectUrl) => {
            alert(`${authResult.user.displayName}login Done!`)
            return false
          }
        }
      })
    }
  },

  mounted: function () {
    auth.onAuthStateChanged(user => {
      if (user) {
        alert('이미 로그인 한 사용자입니다!')
      }
      this.initUI()
    })
  }
}
</script>

<style></style>
