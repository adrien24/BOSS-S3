import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'
import Biographie from '@/components/Biographie'
import Filmographie from "../components/Filmographie";
import Formulaire from "../components/Formulaire";
import Courtmetrage from "../components/Courtmetrage";





Vue.use(Router)


export default new Router({
  routes: [

    {path: '/', name: 'Accueil', component: Accueil},
    {path: '/biographie', name: 'Biographie', component: Biographie},
    {path: '/filmographie', name: 'Filmographie', component: Filmographie},
    {path: '/formulaire', name: 'Formulaire', component: Formulaire},
    {path: '/Courtmetrage', name: 'Courtmetrage', component: Courtmetrage},





  ]
})
