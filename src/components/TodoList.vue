<template>

  <div class="ajouter">
    <h2> Ajouter une Todo </h2>
    <input type="text" v-model="newTodo" placeholder="Nouveau todo" v-on:keyup.enter="addTodo" />
    <button v-on:click.prevent="addTodo"> Ajouter </button>
  </div>

  <div class="todolist">
    <h2> TodoList </h2>
    <ul>
      <li v-for="todo in filterTodos" :key="todo.id" >
          <label id="nameTodo"> {{ todo.name }} </label>
          <input type="checkbox" id="checkBox" v-model="todo.completed"/>
          <button @click.prevent="removeTodo(todo)" > Delete </button>
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
export default {
  name: "TodoList",
  data() {
    return {
      todos: [
        {
          id: 1,
          name : 'tache 1',
          completed : false
        },
        {
          id: 2,
          name : 'tache 2',
          completed: true
        }
      ]
      ,
      newTodo: '',
      filter: 'all',
    }
  },
  methods : {
    removeTodo(todo) {
      let todoIndex = this.todos.indexOf(todo);
      // this.todos = this.todos.slice(todoIndex);
      // splice est mieux.
      this.todos.splice(todoIndex, 1);
    },
    addTodo() {
      this.todos.push({
        id : this.todos.length + 1,
        name : this.newTodo,
        completed : false,
      });
      this.newTodo = '';
    },
  },
  computed : {
    filterTodos () {
      if (this.filter === 'todo') {
        return this.todos.filter(todo => !todo.completed)
      } else if (this.filter === 'finished') {
        return this.todos.filter(todo => todo.completed)
      }
      return this.todos
    }
  }
}
</script>

<style scoped>

</style>