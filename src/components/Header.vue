<template>
<!--Navbar-->
  <div class="navbar">
    <div class="container flex">
      <h1 class="logo">
        <i class="far fa-lightbulb"></i>
        SPIKE
        <i class="far fa-lightbulb"></i>
      </h1>
      <nav>
        <ul>
          <li>
            <router-link :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Contact' }">Contact</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Contact' }">About</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>

</style>