<template>

  <div class="add">
    <input type="text" placeholder="Ajouter une todo" v-model="newTodo" v-on:keyup.enter="createTodo([newTodo, 0, getCurrentListId])">
    <button v-on:click="createTodo([newTodo, 0, getCurrentListId])"> Ajouter </button>
  </div>
  <div class="affichage">
    <h2> Todos </h2>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <label id="nameTodo" @dblclick="editTodo(todo)"> {{ todo.name }} </label>
        <input type="checkbox" id="checkBox" v-model="todo.completed" true-value="1" false-value="0" @change="completeTodo([todo.id, todo.name, todo.completed, todo.todolist_id])"/>

      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

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
  },
  computed : {
    ...mapGetters("todolist", ['getCurrentListId']),
  }
}
</script>

<style scoped>

</style>