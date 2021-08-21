import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import PastQuestions from '@/views/PastQuestions/PastQuestions.vue'
import PhysicalSciences from '@/views/PastQuestions/PhysicalSciences/PhysicalSciences.vue'
import Chemistry from '@/views/PastQuestions/PhysicalSciences/Chemistry/Chemistry.vue'
import OrganicChemistry from '@/views/PastQuestions/PhysicalSciences/Chemistry/OrganicChemistry.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Home
  },
  {
    path: '/past-questions',
    name: 'PastQuestions',
    component: PastQuestions
  },
  {
    path: '/past-questions/physical-sciences',
    name: 'PhysicalSciences',
    component: PhysicalSciences
  },
  {
    path: '/past-questions/physical-sciences/chemistry',
    name: 'Chemistry',
    component: Chemistry
  },
  {
    path: '/past-questions/physical-sciences/organic-chemistry',
    name: 'OrganicChemistry',
    component: OrganicChemistry
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
