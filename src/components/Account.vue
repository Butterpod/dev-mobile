<template>

  <nav v-if="!isConnected">
    <ul class="navlist">
      <li> <a href="#" v-on:click="setWindow('login')"> Connexion </a> </li>
      <li> <a href="#" v-on:click="setWindow('register')"> Inscription </a> </li>
    </ul>

  </nav>

  <p> Etat de connexion : <strong> {{ isConnected }} </strong> </p>

  <div class="content">
  <div v-if="getWindow === 'login' && isConnected !== true">

    <form @submit.prevent="login([email, password, username])">
    <p> <label for="userName"><b>Email : </b></label> </p>
    <input id="userName" type="text" placeholder="Email" name="userName" required v-model="email">

    <p> <label for="password"><b>Mot de passe : </b></label> </p>
    <input id="password" type="password" placeholder="Mot de passe" name="password" minlength="6" required v-model="password">

      <br> <br>
    <button type="submit" >Connexion</button>

    </form>
  </div>

  <div v-if="getWindow === 'register' && isConnected !== true">

    <form @submit.prevent="register([email, password, username])">

      <p><label for="userName"><b>Nom d'utilisateur : </b></label></p>
    <input id="userName" type="text" placeholder="Nom d'utilisateur" name="userName" required v-model="username">

    <p><label for="email"><b>Email : </b></label> </p>
    <input id="email" type="text" placeholder="Email" name="email" required v-model="email">

    <p> <label for="password"><b>Mot de passe : </b></label> </p>
    <input id="password" type="password" placeholder="Mot de passe" name="password" minlength="6" required v-model="password">
    <br> <br>
    <button type="submit"> Inscription </button>
      <br>

    </form>
  </div>

  <div v-if="isConnected === true">

    <form @submit.prevent="logout">
      <button> Deconnexion </button>
    </form>
  </div>

  </div>

</template>

<script>
import {mapMutations, mapGetters, mapActions} from "vuex";

export default {
  name: "Account",
  data() { return {
    email: "",
    password: "",
    username: "",
  }
  },
  methods : {
    ...mapMutations("account", ["setWindow", "logout"]),
    ...mapActions("account", ["login", "register"]),
  },
  computed : {
    ...mapGetters("account", ["getWindow", "isConnected"]),
  }
}
</script>

<style scoped>

nav li {
  list-style-type: none;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  border: 1px solid #051923;
  border-radius: 10px;
  background: #003554;
  margin: 15px;
}

nav li:hover {
  background: #627681;
  color : #00A6FB;
}

a {
  pointer-events: none;
  text-decoration: none;
  color : #FFFFFF;
}

nav ul {
  display: flex;
  justify-content: center;
}


/* items menus */



.content {
  border : 1px solid #051923;
  border-radius: 15px;
  background : #0582CA;
  color : #051923;
  text-align : center;
}

button {
  font-family: inherit;
  font-size: 100%;
  color : #FFFFFF;
  background : #003554;
  border-radius: 10px;
}

button:hover {
  background : #096093;
}
</style>