<template>
  <ul>
  <li v-for="todo in todoLists" :key="todo.id">
    <label id="nameTodo" v-on:click="getTodo(todo.id)"> {{ todo.name }} </label>
    <button v-on:click="deleteTodoList(todo.id)"> X </button>
  </li>
  </ul>
</template>

<script>

import {mapActions} from "vuex";

export default {
  name: "sidebarItem",
  props : ['todoLists'],
  methods : {
    ...mapActions("todolist", ['getTodo', 'deleteTodoList']),
  }
}
</script>

<style scoped>

button{
  margin: 0.3em;
  color : #FFFFFF;
  background : #003554;
  border : 1px solid #051923;
  border-radius: 15px;
}

button:hover{
  background : #096093;
}

</style>