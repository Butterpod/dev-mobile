<template>
  <ul>
  <li v-for="todo in todoLists" :key="todo.id">
    <label id="nameTodo" v-on:click="getTodo(todo.id)"> {{ todo.name }} </label>
    <button v-on:click="deleteTodoList(todo.id)"> Delete </button>
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


</style>