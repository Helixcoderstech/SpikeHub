<template>
<Header />
<Showcase />
<section class="stats">
  <div class="container">
    <h2 class="stats-heading text-center my-1">
        <router-link :to="{ name: 'PastQuestions' }">Past Questions</router-link>
        <i class="fas fa-angle-double-right"></i>
        Physical Sciences
    </h2>
    <div class="grid grid-3">
      <Card>
        <img src="@/assets/imgs/science.jpg" alt="Education">
        <a href="">
          <h3>MATHEMATICS</h3>
        </a>
      </Card>
      <Card>
        <img src="@/assets/imgs/campus.jpg" alt="Education">
        <router-link :to="{ name: 'Chemistry' }">
          <h3>CHEMISTRY</h3>
        </router-link>
      </Card>
      <Card>
        <img src="@/assets/imgs/image.jpg" alt="Education">
        <a href="">
          <h3>PHYSICS</h3>
        </a>
      </Card>
      <Card>
        <img src="@/assets/imgs/image-1.jpg" alt="Education">
        <a href="">
          <h3>GEOLOGY</h3>
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