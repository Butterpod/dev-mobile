<template>

  <div class="ajouter">
    <h2> Ajouter une Todo </h2>
    <input type="text" :value="getNewTodo" @input="setNewTodo" placeholder="Nouveau todo" v-on:keyup.enter="addTodo" />
    <button v-on:click.prevent="addTodo"> Ajouter </button>
  </div>

  <div class="todolist">
    <h2> TodoList </h2>
    <ul>
      <li v-for="todo in getFilteredTodos" :key="todo.id" >
        <label id="nameTodo"> {{ todo.name }} </label>
        <input type="checkbox" id="checkBox" v-model="todo.completed"/>
        <button @click.prevent="removeTodo(todo)" > Delete </button>
      </li>
    </ul>
  </div>

  <div class="filtres">
    <h2> Filtres : </h2>
    <ul class="filtres2">
      <li><button v-bind:class="{selected: getFilter === 'all'}" @click.prevent="setFilter('all')"> Tout </button></li>
      <li><button v-bind:class="{selected: getFilter === 'todo'}" @click.prevent="setFilter('todo')"> Todo </button></li>
      <li><button v-bind:class="{selected: getFilter === 'finished'}" @click.prevent="setFilter('finished')"> Terminé </button></li>
    </ul>
  </div>

</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "TodoList",
  methods : {
    ...mapMutations("todolist", ['removeTodo', 'addTodo', 'setFilter', 'setNewTodo']),
  },
  computed: {
    ...mapGetters("todolist", ['getFilteredTodos', 'getTodos', 'getNewTodo', 'getFilter']),
  },
}
</script>

<style scoped>

</style>