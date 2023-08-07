<template>
  <div :class="this.$i18n.locale == 'ar' ? 'is_rtl' : 'is_ltr'">
    <router-view > 

    </router-view>
  </div>
</template>

<script>
export default {
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
