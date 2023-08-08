<template>
  <div>
    <hero-component/>
    <servies-component />
    <about-component />
    <contact-section />
  
  </div>
</template>

<script>
import HeroComponent from '../components/homecomponents/HeroComponent.vue'
import ServiesComponent from '@/components/homecomponents/ServiesComponent.vue'
import AboutComponent from '@/components/homecomponents/AboutComponent.vue'
import ContactSection from '@/components/homecomponents/ContactSection.vue'



export default {
  components: {HeroComponent, ServiesComponent, AboutComponent, ContactSection }
}
</script>

<style></style>
