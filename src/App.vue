<template>
  <div :class="this.$i18n.locale == 'ar' ? 'is_rtl' : 'is_ltr'">
    <router-view > 

    </router-view>
    <footer-component/>
  </div>
</template>

<script>
import FooterComponent from '@/components/homecomponents/FooterComponent.vue';
export default {
  components: { FooterComponent },
  mounted() {
    if (this.$i18n.global.locale == "en") {
      document.body.dir = "ltr";
    } else {
      document.body.dir = "rtl";
    }
  },
}
</script>

<style></style>
