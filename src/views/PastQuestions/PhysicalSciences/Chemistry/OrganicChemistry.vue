<template>
<Header />
<Showcase />
<section class="question-template">
  <div class="container">
    <h2 class="question-heading text-center my-1">
        <router-link :to="{ name: 'PastQuestions' }">Past Questions</router-link>
        <i class="fas fa-angle-double-right"></i>
        <router-link :to="{ name: 'PastQuestions' }">Physical Sciences</router-link>
        <i class="fas fa-angle-double-right"></i>
        Chemistry
    </h2>
    <h2 class="question-heading text-center my-1">
        ORGANIC CHEMISTRY
    </h2>

    <Card>
        <h3>Q1. </h3>
        <div>
            <p>Which of these is the product formed between CH3COOH AND CH3CH2CH2OH?</p>
            <ul>
                <li>Ethyl Propanoate</li>
                <li>Propyl Ethanoate</li>
                <li>Butyl Propanoate</li>
                <li>Propyl Butanoate</li>
            </ul>
            <div class="solution">
                <p><a href="">View Solutions<i class="fas fa-check-circle"></i></a></p>
            </div>
        </div>
    </Card>
    <Card>
        <h3>Q2. </h3>
        <div>
            <p>Which of the following is not a characteristics of Organic Compounds?</p>
            <ul>
                <li>They are generally volatile and inflammable</li>
                <li>They may be in gaseous,liquid and solid state </li>
                <li>They are mostly ionic compounds</li>
                <li>They do not conduct electricity becaue of the absence of free ions</li>
            </ul>
            <div class="solution">
                <p><a href="">View Solutions<i class="fas fa-check-circle"></i></a></p>
            </div>
        </div>
    </Card>
    <Card>
        <h3>Q3. </h3>
        <div>
            <p>The compound produced by the oxidation of 2-methylpropanol is?</p>
            <ul>
                <li>Aldehyde</li>
                <li>Carbide</li>
                <li>Alkanoic</li>
                <li>Ketone</li>
            </ul>
            <div class="solution">
                <p><a href="">View Solutions<i class="fas fa-check-circle"></i></a></p>
            </div>
        </div>
    </Card>
    <Card>
        <h3>Q4. </h3>
        <div>
            <p>Which of these is a derivative of carboxylic acid</p>
            <ul>
                <li>Amide</li>
                <li>Amine</li>
                <li>Sulphiones</li>
                <li>Carbene</li>
            </ul>
            <div class="solution">
                <p><a href="">View Solutions<i class="fas fa-check-circle"></i></a></p>
            </div>
        </div>
    </Card>
    <Card>
        <h3>Q5. </h3>
        <div>
            <p>The molecular formular of Pentane</p>
            <ul>
                <li>CH3CH2CH2CH3</li>
                <li>CH3CH2CH2CH(CH3)CH3</li>
                <li>CH3CH2CH2CH2CH3</li>
                <li>CH2CH2CH2CH2CH3</li>
            </ul>
            <div class="solution">
                <p><a href="">View Solutions<i class="fas fa-check-circle"></i></a></p>
            </div>
        </div>
    </Card>
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