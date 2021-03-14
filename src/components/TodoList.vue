<template>

  <div class="ajouter">
    <h2> Ajouter une Todo </h2>
    <input type="text" :value="todoList.newTodo" @input="update" placeholder="Nouveau todo" v-on:keyup.enter="addTodo(todoList)" />
    <button v-on:click.prevent="addTodo(todoList)"> Ajouter </button>
  </div>

  <div class="todolist">
    <h2> TodoList </h2>
    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id" >
        <label id="nameTodo"> {{ todo.name }} </label>
        <input type="checkbox" id="checkBox" v-model="todo.completed"/>
        <button @click.prevent="removeTodo({todo, todoList })" > Delete </button>
      </li>
    </ul>
  </div>

  <div class="filtres">
    <h2> Filtres : </h2>
    <ul class="filtres2">
      <li><button v-bind:class="{selected: getFilterB === 'all'}" @click.prevent="setFilter({ filtre : 'all', id})"> Tout </button></li>
      <li><button v-bind:class="{selected: getFilterB === 'todo'}" @click.prevent="setFilter({ filtre : 'todo', id})"> Todo </button></li>
      <li><button v-bind:class="{selected: getFilterB === 'finished'}" @click.prevent="setFilter({ filtre : 'finished', id})"> Terminé </button></li>
    </ul>
  </div>

</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "TodoList",
  props : {
    id: {type: Number, default: 1}
  },
  methods : {
    ...mapMutations("todolist", ['setFilter', 'removeTodo', 'setNewTodo', 'addTodo']),
    // Met à jour le newTodo en fonction du handler de l'event target.value du formulaire.
    update(e) {
      this.todoList.newTodo = e.target.value;
    }
  },
  computed: {
    ...mapGetters("todolist", ['getTodoList','getTodo', 'getFilteredTodos', 'getFilter', 'getNewTodo']),
    // On rédéfinit les méthodes nécessitant le props id
    todoList() {
      return this.getTodoList(this.id);
    },
    todo() {
      return this.getTodo(this.id);
    },
    getFilterB() {
      return this.getFilter(this.id);
    },
    filteredTodos() {
      return this.getFilteredTodos(this.id);
    },
    getNewTodoB() {
      return this.getNewTodo(this.id);
    }
  },
}
</script>

<style scoped>

</style>