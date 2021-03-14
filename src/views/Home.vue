<template>
<sidebar></sidebar>
  <div v-for="todo in getTodoLists" :key="todo.id">
    <todo-list v-if="todo.display" :id="todo.id"></todo-list>
  </div>
</template>

<script>
import sidebar from "@/components/sidebar";
import TodoList from "@/components/TodoList";
import {mapGetters} from "vuex";

export default {
  name: "Home",
  components: {
    sidebar, TodoList
  },
  computed : {
    ...mapGetters("todolist", ['getTodoLists']),
  }
}
</script>

<style scoped>

</style>