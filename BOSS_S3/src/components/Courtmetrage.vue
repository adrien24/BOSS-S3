<template>
  <div class="hello">
    <div class="film">
      <header class="header">
        <a href="./index.html" class="logo">Michelangelo Antonioni</a>
        <input class="menu-btn" type="checkbox" id="menu-btn"/>
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
          <li><router-link to="/">ACCUEIL</router-link></li>
          <li><router-link to="/filmographie">FILMOGRAPHIE</router-link></li>
          <li><router-link to="/biographie">BIOGRAPHIE</router-link></li>
          <li><router-link to="/courtmetrage">COURT - MÉTRAGE</router-link></li>
        </ul>
      </header>

      <h1>Tous les Courts-métrages réalisé par Michelangelo Antonioni</h1>



      <div class="container" style="margin-top: 5%; margin-left: 5%" v-for="metrage in donnees" :key="donnees.id">
        <div class="row justify-content-start">
          <div class="col-lg-4 col-12" style="margin-top: -4%">
            <h2 style="color: #FCFCFC; text-align: center">{{ metrage.titre }}</h2>
            <img :src="metrage.affiche" style="width: 100%">
          </div>
          <div class="col-lg-8 col-12" style="color: #FCFCFC">


            <p>Réalisateurs : {{ metrage.realisateur }}</p>

            <p>Année : {{ metrage.annee }}</p>

            <p>Catégories : {{ metrage.categorie }}</p>

            <p>Synopsis : {{ metrage.resume }}</p>
          </div>
        </div>
      </div>






      <footer class="row">
        <p class="col-lg-12    d-flex justify-content-center text-primary"
           style="text-align: center; margin-top: 2%;margin-bottom: 2%; color: #FCFCFC!important;">Ce projet à été réaliser dans le cadre du bosse du 3ème semestre de MMI</p>
        <a href="https://fr.wikipedia.org/wiki/Michelangelo_Antonioni" class="col-lg-6 col-md-12  d-flex justify-content-center text-primary"
           style="text-align: center; color: #FCFCFC">Wikipedia Michelangelo Antonioni</a>
        <a href="http://mmimontbeliard.com/" class="col-lg-6 col-md-12  d-flex justify-content-center text-primary"
           style="text-align: center; color: #FCFCFC">MMI Montbéliard</a>
      </footer>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Courtmetrage',
  data() {
    return {
      donnees: []
    }
  },


  created() {
    axios.get('../static/Michelangelocourtmetrage.json')
      .then(function (response) {
        console.log(response.data);
        this.donnees = response.data;
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
