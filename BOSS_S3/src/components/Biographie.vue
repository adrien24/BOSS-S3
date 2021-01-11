<template>
  <div class="hello">
    <div class="biographie">
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

      <div class="row justify-content-center" style="padding-top: 10%; color: #FCFCFC" v-for="bio in donnees" :key="donnees.id">
        <div class="col-lg-4 col-12">
          <img src="../assets/img/Michelangelo_Antonioni_Cropped.jpg">
        </div>
        <div class="col-lg-6 col-12" style="margin-top: 5%">
          <p>{{ bio.texteprofil1 }}</p>

          <p>{{ bio.texteprofil2 }}</p>
        </div>
      </div>


      <div class="row justify-content-center" style="padding-top: 10%; color: #FCFCFC" v-for="bio in donnees" :key="donnees.id">
        <div class="col-lg-5 col-12">
          <h2>Enfance et formation</h2>
          <p>{{ bio.enfance }}</p>
        </div>
        <div class="col-lg-5 col-12">
          <h2>Les débuts de cinéma</h2>

          <p>{{ bio.cinema }}</p>
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
    axios.get('../static/MichelangeloBio.json')
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
