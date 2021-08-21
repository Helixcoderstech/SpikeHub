<template>
<Header />
<Showcase />
<section class="stats">
  <div class="container">
    <h2 class="stats-heading text-center my-1">
        Past Questions
    </h2>
    <div class="grid grid-3">
      <Card>
        <img src="@/assets/imgs/science.jpg" alt="Education">
        <router-link :to="{ name: 'PhysicalSciences' }">
          <h3>PHYSICAL SCIENCES</h3>
        </router-link>
      </Card>
      <Card>
        <img src="@/assets/imgs/campus.jpg" alt="Education">
        <a href="">
          <h3>BIOLOGICAL SCIENCES</h3>
        </a>
      </Card>
      <Card>
        <img src="@/assets/imgs/image.jpg" alt="Education">
        <a href="">
          <h3>COMPUTER SCIENCES</h3>
        </a>
      </Card>
      <Card>
        <img src="@/assets/imgs/image-1.jpg" alt="Education">
        <a href="">
          <h3>SOCIAL SCIENCES</h3>
        </a>
      </Card>
      <Card>
        <img src="@/assets/imgs/logo.jpg" alt="Education">
        <a href="">
          <h3>CLINICAL SCIENCES</h3>
        </a>
      </Card>
      <Card>
        <img src="@/assets/imgs/entertain.jpg" alt="Education">
        <a href="">
          <h3>OTHERS</h3>
        </a>
      </Card>
    </div>
  </div>
</section>
<Footer />
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Showcase from '@/components/Showcase'
import Card from '@/components/Card'

export default {
  components: {
    Header,
    Footer,
    Showcase,
    Card
  }
}
</script>

<style>

</style>