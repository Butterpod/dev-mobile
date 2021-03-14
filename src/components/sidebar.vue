<template>

  <h1> Listes </h1>
  <sidebar-item></sidebar-item>
  <button v-on:click="addTodoList"> Add todoList </button>
</template>

<script>
import {mapMutations} from "vuex";
import sidebarItem from "@/components/sidebarItem";

export default {
name: "sidebar",
  components : {
    sidebarItem
  },
  methods: {
    ...mapMutations("todolist", ['addTodoList']),
  }
}
</script>

<style scoped>

ul {
  border : 1px solid black;
  width : 20%;
}
</style>