<template>
  <div>
    <hero-component/>
    <servies-component />
    <about-component />
    <projects-component/>
    <customers-component/>
    <contact-section />
  
  </div>
</template>

<script>
import HeroComponent from '../components/homecomponents/HeroComponent.vue'
import ServiesComponent from '@/components/homecomponents/ServiesComponent.vue'
import AboutComponent from '@/components/homecomponents/AboutComponent.vue'
import ContactSection from '@/components/homecomponents/ContactSection.vue'
import ProjectsComponent from '@/components/homecomponents/ProjectsComponent.vue'
import CustomersComponent from '@/components/homecomponents/CustomersComponent.vue'



export default {
  components: {HeroComponent, ServiesComponent, AboutComponent, ContactSection,ProjectsComponent, CustomersComponent }
}
</script>

<style></style>
