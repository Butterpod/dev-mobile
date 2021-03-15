<template>
  <ul>
  <li v-for="todo in todoLists" :key="todo.id" v-on:click="getTodo(todo.id)">
    <label id="nameTodo"> {{ todo.name }} </label>
  </li>
  </ul>
</template>

<script>

import {mapActions} from "vuex";

export default {
  name: "sidebarItem",
  props : ['todoLists'],
  methods : {
    ...mapActions("todolist", ['getTodo']),
  }
}
</script>

<style scoped>

</style>