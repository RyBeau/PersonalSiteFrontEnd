<template>
  <div id="app">
    <navbar></navbar>
    <transition name="fade" mode="out-in" @before-leave="beforeLeave" @enter="enter" @after-enter="afterEnter">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from "./Desktop/components/Navbar";
export default {
  name: 'app',
  components: {Navbar},
  data() {
    return {

    }
  }
}

</script>
