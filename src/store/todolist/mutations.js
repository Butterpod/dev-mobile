export function addTodoList(state) {
    state.todoLists.push({
        id: state.todoLists.length + 1,
        name : 'liste' + (state.todoLists.length + 1),
        newTodo : '',
        filtre : '',
        display : false,
        todos : [],
    })
    console.log(state.todoLists);
}

export function setFilter(state, payload) {
    state.todoLists.find(el => el.id === payload.id).filtre = payload.filtre;
}

export function removeTodo(state, payload) {
    let todoL = state.todoLists.find(el => el.id === payload.todoList.id);
    let t = todoL.todos;
    let todoIndex = t.indexOf(payload.todo);
    t.splice(todoIndex, 1);
}

export function addTodo(state, todoList) {
    todoList.todos.push({
        id : todoList.todos.length + 1,
        name : todoList.newTodo,
        completed : false,
    });
    todoList.newTodo = '';
}

export function verifyDisplay(state) {
    //console.log(state.todoLists.find(el => el.display === true));
    let todoL = state.todoLists.find(el => el.display === true);
    if (todoL !== undefined) {
        todoL.display = false;
    }

}

export function display(state, id) {
    let todoL = state.todoLists.find(el => el.id === id);
    todoL.display = true;
}