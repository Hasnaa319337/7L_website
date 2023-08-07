<template>
  <div>
    <!-- <about-component /> -->
    <contact-section />
    <footer-component />
  </div>
</template>

<script>
// import AboutComponent from '@/components/homecomponents/AboutComponent.vue'
import ContactSection from '@/components/homecomponents/ContactSection.vue'
import FooterComponent from '@/components/homecomponents/FooterComponent.vue'

export default {
// AboutComponent,
  components: {  ContactSection, FooterComponent }
}
</script>

<style></style>
