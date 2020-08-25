<template>
  <div id="app">
    <navbar/>
    <login/>
    <transition name="fade" mode="out-in" @before-leave="beforeLeave" @enter="enter" @after-enter="afterEnter">
      <router-view/>
    </transition>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/login";
export default {
  name: 'app',
  components: {Login, Footer, Navbar},
  data() {
    return {

    }
  }
}

</script>
