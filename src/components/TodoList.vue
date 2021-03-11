<template>

  <div class="ajouter">
    <h2> Ajouter une Todo </h2>
    <input type="text" v-model="newTodo" placeholder="Nouveau todo" v-on:keyup.enter="addTodo" />
    <button v-on:click.prevent="adddTodo"> Ajouter </button>
  </div>

  <div class="todolist">
    <h2> TodoList </h2>
    <ul>
      <li v-for="todo in filterTodos" :key="todo.id" >
          <label id="nameTodo"> {{ todo.name }} </label>
          <input type="checkbox" id="checkBox" v-model="todo.completed"/>
          <button @click.prevent="removTodo(todo)" > Delete </button>
      </li>
    </ul>
  </div>

  <div class="filtres">
    <h2> Filtres : </h2>
    <ul class="filtres">
      <li><button v-bind:class="{selected: filter === 'all'}" @click.prevent="filter = 'all'"> Tout </button></li>
      <li><button v-bind:class="{selected: filter === 'todo'}" @click.prevent="filter = 'todo'"> Todo </button></li>
      <li><button v-bind:class="{selected: filter === 'finished'}" @click.prevent="filter = 'finished'"> Terminé </button></li>
    </ul>
  </div>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "TodoList",
  computed : {
    ...mapGetters('todolist', ['getTodo', 'getFilter', 'getNewTodo']),
    ...mapActions('todolist', ['test', 'addTodo','removeTodo']),
    todos(){
      return this.getTodo;
    },
    filter(){
      return this.getFilter;
    },
    newTodo(){
      return this.getNewTodo;
    },
    test(){
      return this.test;
    },
    filterTodos () {
      if (this.filter === 'todo') {
        return this.todos.filter(todo => !todo.completed)
      } else if (this.filter === 'finished') {
        return this.todos.filter(todo => todo.completed)
      }
      return this.todos
    }
  },
  methods : {
    removTodo(todo) {
      return this.removeTodo(todo);
    },
    adddTodo() {
      return this.addTodo();
    },
  }

}
</script>

<style scoped>

</style>