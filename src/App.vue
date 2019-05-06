<template>
  <div id="app">

    <header>
      <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
        <div class="banner-wrapper">
          <div class="logo">
            <!-- <img src="./assets/logo-2.png"> -->
          </div>
          <div id="nav-action">
            <router-link to="/login">Sign in</router-link>
            <router-link to="/register">Registration</router-link>
          </div>
        </div>
      </v-parallax>
    </header>

    <div class="nav-wrapper">
      <div class="container">
        <div id="nav">
          <router-link to="/" tag="a" exact>Home</router-link>
          <router-link to="/rules" tag="a" exact>Rules</router-link>
        </div>
      </div>
    </div>

    <bread-crumb></bread-crumb>
    <router-view/>

    <footer>

    </footer>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb';
export default {
  name: "app",
  components: {
    BreadCrumb
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: #e5e5e5;
}

a {
  text-decoration: none;
  color: #ffffff;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.v-parallax {
  height: 30vh!important;
}

.nav-wrapper{
  height: 50px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  margin-top: -50px;
  background-color: rgba(0,0,0,0.5);

  #nav a {
    padding: 20px 10px;
    display: flex;
    display: inline-block;
  }

  .container {
    display: flex;
    justify-content: space-between!important;
    align-items: center!important;
    padding: 0!important;
  }
}

.banner-wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  a {
    display: flex;
    float: left;
    color: #ffffff;
    text-decoration: none;
    height: 40px;
    align-items: center;
    padding: 0 10px;
  }
}

#nav-action {
  border-color: rgba(255,255,255,0.1);
  border-style: solid;
  border-width: 0;
  height: 40px;
  border-radius: 5px;
  font-size: 12px;
  background-color: rgba(0,0,0,0.5);
  background-image: none;
  font-weight: 700;
  box-shadow: 0px 1px 3px rgba(0,0,0,0.5) inset, 0px 1px 0px rgba(255,255,255,0.2), 0px 0px 0px 1px rgba(255,255,255,0.07000000000000001), 0px 10px 10px rgba(0,0,0,0.2) inset;
}

.logo {
  padding-left: 30px;
}
</style>
