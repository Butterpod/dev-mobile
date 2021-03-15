<template>

  <h1> Listes </h1>
  <sidebar-item :todoLists="getData"></sidebar-item>
  <input type="text" v-model="listName" placeholder="Ajouter une todolist" v-on:keyup.enter="createTodoList(listName)"/>
  <button v-on:click="createTodoList(listName)"> Ajouter todolist </button>
</template>

<script>
import sidebarItem from "@/components/sidebarItem";
import {mapActions} from "vuex";

export default {
name: "sidebar",
  data() {
    return {
    listName: '',
  }
  },
  components : {
    sidebarItem
  },
  props: {
    todoLists: {type: Array}
  },
  methods : {
    ...mapActions("todolist", ['createTodoList']),
  },
  computed : {
    getData() {
      return this.todoLists;
    }
  }
}
</script>

<style scoped>

ul {
  border : 1px solid black;
  width : 20%;
}
</style>