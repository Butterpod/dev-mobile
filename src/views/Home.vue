<template>
  <div class="blocApp">
  <div v-if="isConnected">
    <sidebar :todoLists="getTodoLists"></sidebar>
    <todo-list class="todo" v-if="getCurrentTodos !== null" :todos="getCurrentTodos"></todo-list>
  </div>
  <div v-else>
    <h2> Veuillez vous connectez. </h2>
  </div>
  </div>
</template>

<script>
import sidebar from "@/components/sidebar";
import TodoList from "@/components/TodoList";
import {mapGetters, mapActions} from "vuex";

export default {
  name: "Home",
  components: {
    sidebar, TodoList
  },
  methods : {
    ...mapActions("todolist", ['load']),
  },
  created() {
    if (localStorage.getItem('USER_TOKEN') !== null) {
      this.load()
    }
  },
  computed : {
    ...mapGetters("todolist", ['getTodoLists', 'getCurrentTodos']),
    ...mapGetters("account", ['isConnected']),
  },
  /*
  computed : {
    getData() {
      let retrievedObject = localStorage.getItem('todoLists');
      console.log(retrievedObject);
      console.log(JSON.parse(retrievedObject));
      return JSON.parse(retrievedObject);
    }
  }
   */
}
</script>

<style scoped>

.blocApp {
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-gap: 10px;
  grid-auto-rows: 100px;
}

</style>