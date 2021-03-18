<template>
  <div id="nav">
    <router-link to="/">Accueil</router-link> |
    <router-link to="/login">Connexion</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #051923;
}

#nav a.router-link-exact-active {
  color: #006494;
}

</style>


