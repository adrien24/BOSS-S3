<template>
  <div class="hello">
    <div class="accueil">
      <div class="header">
        <a href="./index.html" class="logo">Michelangelo Antonioni</a>
        <input class="menu-btn" type="checkbox" id="menu-btn"/>
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
          <li><router-link to="/">ACCUEIL</router-link></li>
          <li><router-link to="/filmographie">FILMOGRAPHIE</router-link></li>
          <li><router-link to="/biographie">BIOGRAPHIE</router-link></li>
          <li><router-link to="/courtmetrage">COURT - MÉTRAGE</router-link></li>
        </ul>
    </div>
    </div>
  </div>
</template>

<!-- fait au dernier moment pas eu le temps de finir :( -->

<script>
export default {
  name: 'Menu',
  data () {
    return {
      msg: 'Bienvenue sur la page Accueil'
    }
  },



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>





/* header */

a, a:hover{
  color: #FCFCFC!important;
}






body > header > label > span, body > header > label > span::before, body > header > label > span::after{
  background: #FCFCFC!important;

}

.header {
  background-color: #1D1D1D;
  width: 100%;
  z-index: 3;


}

#app > div > div > div > a{
  display: none;
}

#app > div > div > div > ul > li{
  width: 100%;
}

#app > div > div > div > ul > li > a{
  text-align: center!important;
}

#app > div > div > div > ul > li:nth-child(1) > a{
  margin-top: 35%;
}

#app > div > div > div > ul > li:nth-child(4){
  padding-bottom: 94%;
}


.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;

}

.header li a {
  display: block;
  padding: 20px 20px;
  text-decoration: none;
}



.header .logo {
  display: block;
  float: left;
  font-size: 2em;
  padding: 10px 20px;
  text-decoration: none;
}

/* menu */

.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height .2s ease-out;
}

/* menu icon */

.header .menu-icon {
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.header .menu-icon .navicon {
  background: #333;
  display: block;
  height: 2px;
  position: relative;
  transition: background .2s ease-out;
  width: 18px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #333;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all .2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: 240px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent!important;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}



/* 48em = 768px */

@media (min-width: 48em) {
  .header li {
    float: left;
  }
  body{
    overflow-y: hidden;
  }
  .header li a {
    padding: 20px 30px;
  }
  .header .menu {
    clear: none;
    float: right;
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }


}

@media only screen and (min-device-width : 200px) and (max-device-width : 480px) {
  body > div > div.col-lg-5.col-12.biographie{
    margin-top: 158%;
  }

  .header .menu-btn:checked ~ .menu{
    max-height: 1000px!important;
  }

  body > header > ul > li:nth-child(4){
    padding-bottom: 100%;
  }

  body > header > a{
    display: none!important;
  }

  body > header > ul{
    text-align: center;
  }

  body > header > ul > li:nth-child(1) > a{
    margin-top: 40%;
  }

  body > header > label{
    margin-right: 86%;
    background-color: #1D1D1D;
  }

  header{
    background-color: #1D1D1D;

  }
}


</style>
