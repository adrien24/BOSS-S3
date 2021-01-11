<template>
  <div class="hello">
    <div class="formulaire">
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


      <div class="row jusify-content around" style="padding-top: 6%; background-color: #FCFCFC; padding-left: 5%; margin-left: 0">
        <div class="col-lg-5 col-12">
          <img :src="imageData"
               id="previewImage"
               class="img-responsive text-center"
               alt="image du projet"
               style="width:25%;border:1px solid lightgray;margin:10px;"
          />
          <div class="custom-file">
            <input
              type="file"
              class="custom-file-input"
              @change="previewImage"
              id="validatedCustomFile" required
            >
            <label
              class="custom-file-label"
              for="validatedCustomFile">
            </label>
            <div class="invalid-feedback">Image invalide</div>
          </div>
        </div>

        <div class="col-lg-5 col-12">
          <form @submit="submit" enctype="multipart/form-data">
            <div class="form-group">
              <label for="Nom" style="color: #1D1D1D">Nom du film</label>
              <input type="Nom" v-model="film.name" class="form-control" id="Nom" aria-describedby="Nom" placeholder="Nom du film">
            </div>

            <div class="form-group">
              <label for="Réalisateurs" style="color: #1D1D1D">Réalisateur</label>
              <input type="Nom" v-model="film.realisateur" class="form-control" id="Réalisateurs" aria-describedby="Réalisateurs" placeholder="Nom du Réalisateur">
            </div>

            <div class="form-group">
              <label for="Catégories" style="color: #1D1D1D">Catégories</label>
              <input type="Nom" v-model="film.categorie" class="form-control" id="Catégories" aria-describedby="Catégories" placeholder="Nom de la Catégorie">
            </div>

            <div class="form-group">
              <label for="Synopsis" style="color: #1D1D1D">Synopsis</label>
              <input type="Nom" v-model="film.synopsis" class="form-control" id="Synopsis" aria-describedby="Synopsis" placeholder="Synopsis">
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
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
import ajaxServices from "../services/ajaxServices";


export default {
  name: 'Formulaire',
  data () {
    return {
      imageData : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/BASE_search_engine_logo.svg/1200px-BASE_search_engine_logo.svg.png",
      film: [{
        img: null,
        name: null,
        realisateur: null,
        categorie: null,
        synopsis: null
      }],
    }
  },



  methods:{
    previewImage: function (event) {

//      console.log("Fichier ",event.target.files[0]);
      this.film.img = event.target.files[0];

      // Reference à l'origine de l'évenement
      var input = event.target;
      // Récupération d'un ou de champs file existants
      // et renseignés
      if (input.files && input.files[0]) {

        // Création d'un objet FileReader
        // fichier en lecture
        var reader = new FileReader();

        // Création d'un callback sur event onload
        reader.onload = (e) => {
          // Lecture de l'image en base64
          // pour la charger dans imageData
          this.imageData = e.target.result;
        }
        // Render de l'image en tant qu'URL
        // Format base64 pour affichage
        reader.readAsDataURL(input.files[0]);
      }

    },
    submit: function(){

      // Objet FormData pour paramètres du villageois
      let params = new FormData();
      // Les paramètres à passer au back-end
      params.append('titre',             this.film.name);
      params.append('image',             this.film.realisateur);
      params.append('acteurs',           this.film.categorie);
      params.append('synopsis',          this.film.synopsis);

      ajaxServices.maj('test', params)
        .then(promise =>{
          console.log("Creation film: ", promise);
          // Redirection sur les films
          this.$router.push("/filmographie");
        })
        .catch(error => console.log(error))
  }


  },
}
</script>


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
