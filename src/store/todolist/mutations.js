export function load(state, data) {
    state.todoLists = data;
}

export function addTodoList(state, data) {
    state.todoLists.push(data);
}

export function setCurrentTodos(state, todo) {
    state.currentTodos = todo;
    console.log(state.currentTodos);
}

export function setCurrentListId(state, id) {
    state.currentListId = id;
}

export function complete(state, data) {
    console.log(state);
    console.log(data);
    /*
    let stateListe = state.todoLists.find(el => el.id === data.todolist_id);
    console.log(stateListe);
    let stateTodo = stateListe.todos.find(el => el.id === data.id);
    stateTodo.completed = data.completed;

    state.currentTodos.find(el => el.id === data.id).completed = data.completed;

     */

}

export function addTodo(state, data) {
    console.log(data);
    state.currentTodos.push({
        id : data.id,
        todolist_id : data.todolist_id,
        name: data.name,
        completed: data.completed,
        created_at: data.created_at,
        updated_at: data.updated_at
        });
    console.log(state.currentTodos);
}

export function modify(state, data) {
    let todo = state.currentTodos.find(el => el.id === data.id)
    todo.name = data.name;
}

export function resetState(state) {
    state.todoLists = null;
    state.currentTodos = null;
    state.currentListId = null;
}