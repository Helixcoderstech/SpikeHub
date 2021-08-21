<template>
<Header />
<Showcase />
    <!--Stats-->
<section class="stats">
  <div class="container">
    <h2 class="stats-heading text-center my-1 md">
      QuestHub
    </h2>
    <div class="grid grid-3">
      <Card>
        <img src="../assets/imgs/science.jpg" alt="Education">
        <a href="">
          <h3>SCHOOL</h3>
        </a>
      </Card>
      <Card>
        <img src="../assets/imgs/campus.jpg" alt="Past Question">
        <router-link :to="{ name: 'PastQuestions' }">
          <h3>PAST QUESTIONS</h3>
        </router-link>
      </Card>
      <Card>
        <img src="../assets/imgs/entertain.jpg" alt="Quiz and Answer">
        <a href="">
          <h3>QUIZ</h3>
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
  name: 'Home',
  components: {
    Header,
    Showcase,
    Card,
    Footer
  }
}
</script>

<style>

.stats {
  margin-bottom: 30px;
}

.stats .container .stats-heading {
  color: #047aed;
  font-weight: 700;
}

.stats .container .grid {
  margin: auto;
  max-width: 900px;
}

.stats .container .grid .card {
  transition: transform 0.5s ease-in-out;
}

.stats .container .grid .card:hover {
  transform: scale(0.9);
}
</style>