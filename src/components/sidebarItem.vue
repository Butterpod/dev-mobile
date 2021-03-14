<template>
  <ul>
  <li v-for="todo in getTodoLists" :key="todo.id">
    <label id="nameTodo" v-on:click="displayer(todo.id)"> {{ todo.name + " (" + todo.id + ")" }} </label>
  </li>
  </ul>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
  name: "sidebarItem",
    methods : {
      ...mapActions("todolist", ['displayer']),
    },
    computed : {
      ...mapGetters("todolist", ['getTodoLists']),
    },
}
</script>

<style scoped>

</style>