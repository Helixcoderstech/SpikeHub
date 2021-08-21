<template>
<footer class="footer bg-dark py-5">
  <div class="container">
    <div>
      <h2 class="p-2">SPIKE</h2>
      <i>...a subsidiary of HelixCoders</i>
    </div>
    <div class="social grid grid-3">
          <a href="#">
            <img src="../assets/imgs/instagram.jpg" alt="">
          </a>
          <a href="#">
            <img src="../assets/imgs/twitter.jpg" alt="">
          </a>
          <a href="#">
            <img src="../assets/imgs/instagram.jpg" alt="">
          </a>
    </div>
    <div class="footer_base text-center">
        <p>Developed By HelixCoders Innovation Copyright &copy; 2021. All Rights Reserved &#8739; Helix Blog is a
            platform designed by Baron and Cysteine</p>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.social {
  margin: 20px auto 0 auto;
  padding: 0 20px;
  max-width: 400px;
}

.social a{
  margin: 0 20px;
  transition: transform 0.5s ease-in-out;
}

.social a:hover{
  transform: translateY(-15px);
}

.social a img{
  width: 30px;
  border-radius:40%;
}

@media(max-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>