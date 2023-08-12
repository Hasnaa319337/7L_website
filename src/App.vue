<template>
  <div :class="this.$i18n.locale == 'ar' ? 'is_rtl' : 'is_ltr'">
    <div class="app">
      <div class="carve"></div>
      <header-component />
      <router-view> </router-view>
      <footer-component />
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/homecomponents/HeaderComponent.vue'
import FooterComponent from '@/components/homecomponents/FooterComponent.vue'
export default {
  components: { HeaderComponent, FooterComponent },
  mounted() {
    if (this.$i18n.global.locale == 'en') {
      document.body.dir = 'ltr'
    } else {
      document.body.dir = 'rtl'
    }
  }
}
</script>

<style>
.app {
  position: relative;
}
.app .carve {
  background: rgba(19, 123, 151, 1);
  opacity: 0.03;
  border-radius: 0px 0px 1000px 0px;
  top: 0;
  left: 0;
  position: absolute;
  height: 350px;
  width: 350px;
}
</style>
