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
      previousHeight: 0
    }
  },
  methods: {
    beforeLeave: function (element) {
      this.previousHeight = getComputedStyle(element.height);
    },
    enter: function (element) {
      const {height} = getComputedStyle(element);
      element.style.height = this.previousHeight;
      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter: function (element) {
      element.style.height = 'auto';
    }
  }
}

</script>
