<template>

  <div class="add">
    <input type="text" placeholder="Ajouter une todo" v-model="newTodo" v-on:keyup.enter="createTodo([newTodo, 0, getCurrentListId])">
    <button v-on:click="createTodo([newTodo, 0, getCurrentListId])"> Ajouter </button>
  </div>
  <div class="affichage">
    <h2> Todos </h2>
    <ul>
      <li v-for="todo in getFilteredCurrentTodos" :key="todo.id">
        <label id="nameTodo"> {{ todo.name }} </label>
        <input type="checkbox" id="checkBox" v-model="todo.completed" true-value="1" false-value="0" @change="completeTodo([todo.id, todo.name, todo.completed, todo.todolist_id])"/>

      </li>
    </ul>
  </div>

  <div class="filtre">
    <button v-bind:class="{selected: getFiltre}" v-on:click.prevent="setFiltre('all')"> Tout</button>
    <button v-bind:class="{selected: getFiltre}" v-on:click.prevent="setFiltre('todo')"> Todo </button>
    <button v-bind:class="{selected: getFiltre}" v-on:click.prevent="setFiltre('finished')"> Terminé </button>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
name: "TodoList",
  data () {
  return {
    newTodo: '',
  }
  },
  props: ['todos'],
  methods : {
    ...mapActions("todolist", ['completeTodo', 'createTodo', 'modifyTodo']),
    ...mapMutations("todolist", ["setFiltre"]),
  },
  computed : {
    ...mapGetters("todolist", ['getCurrentListId', 'getFilteredCurrentTodos', 'getFiltre']),
  }
}
</script>

<style scoped>

</style>