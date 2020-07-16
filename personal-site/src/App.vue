<template>
  <div id="app">
    <navbar></navbar>
    <transition name="fade" mode="out-in" @before-leave="beforeLeave" @enter="enter" @after-enter="afterEnter">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "./Desktop/components/Navbar";
import Footer from "./Desktop/components/Footer";
export default {
  name: 'app',
  components: {Footer, Navbar},
  data() {
    return {

    }
  }
}

</script>
