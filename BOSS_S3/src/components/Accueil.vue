<template>
  <div class="hello">
    <div class="accueil">
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


      <div class="row justify-content around">
        <div class="col-lg-5">

        </div>
        <div class="col-lg-5 col-12  biographie">
          <p>
            Michelangelo Antonioni est un réalisateur et scénariste du cinéma italien né à Ferrare en Émilie-Romagne
            le 29
            septembre 1912 et mort à Rome le 30 juillet 2007.
          </p>
          <p>
            Il a obtenu de nombreuses récompenses, dont l'Oscar pour l’ensemble de sa carrière en 1995 et le Lion
            d'or pour
            la carrière à Venise en 1997. Il est un des rares réalisateurs, avec Robert Altman, Henri-Georges
            Clouzot et
            Jean-Luc Godard, à avoir remporté les trois plus hautes récompenses des principaux festivals européens
            que sont
            Cannes, Berlin et Venise.
          </p>

          <button><router-link to="/biographie" style="color: #1D1D1D!important;">Voir la biographie</router-link></button>
        </div>

      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: 'Accueil',

  data () {
    return {
      msg: 'Bienvenue sur la page Accueil'
    }
  },

  mounted() {
    document.body.style.overflow = "hidden";
  },

beforeRouteLeave(to, from, next) {
  document.body.style.overflow = "auto";
  next()
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
