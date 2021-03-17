<template>

  <div class="add">
    <input type="text" placeholder="Ajouter une todo" v-model="newTodo" v-on:keyup.enter="createTodo([newTodo, 0, getCurrentListId])">
    <button v-on:click="createTodo([newTodo, 0, getCurrentListId])"> Ajouter </button>
  </div>
  <div class="affichage">
    <h2> Todos </h2>
    <ul>
      <li v-for="todo in getFilteredCurrentTodos" :key="todo.id">
        <label v-if="!todo.editing" @dblclick="editTodo(todo)" id="nameTodo" :class="{ completed : todo.completed }"> {{ todo.name }} </label>
        <input v-else type="text" v-model="todo.name" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)" v-focus>
        <input type="checkbox" id="checkBox" v-model="todo.completed" true-value="1" false-value="0" @change="completeTodo([todo.id, todo.name, todo.completed, todo.todolist_id])"/>
        <button v-on:click="deleteTodo(todo.id)"> Delete </button>
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
    editing : false,
    beforeEditCache : '',
  }
  },
  props: ['todos'],
  methods : {
    ...mapActions("todolist", ['completeTodo', 'createTodo', 'modifyTodo', 'deleteTodo', 'modifyTodo']),
    ...mapMutations("todolist", ["setFiltre"]),
    editTodo(todo) {
      this.beforeEditCache = todo.title
      todo.editing = true
    },
    doneEdit(todo) {
      if (todo.name.trim() == '') {
        todo.name = this.beforeEditCache
      }
      todo.editing = false
      this.modifyTodo([todo.id, todo.name, todo.completed, todo.todolist_id]);
    },
    cancelEdit(todo) {
      todo.name = this.beforeEditCache
      todo.editing = false
    },
  },
  computed : {
    ...mapGetters("todolist", ['getCurrentListId', 'getFilteredCurrentTodos', 'getFiltre']),
  },
  directives : {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
}
</script>

<style scoped>

</style>