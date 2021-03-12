export const getFilteredTodos = (state) => {
    if (state.filter === 'todo') {
        return state.todos.filter(todo => !todo.completed);
    } else if (state.filter === 'finished') {
        return state.todos.filter(todo => todo.completed);
    }
    return state.todos;
}

export const getTodos = (state) => {
    return state.todos;
}

export const getNewTodo = (state) => {
    return state.newTodo;
}

export const getFilter = (state) => {
    return state.filter;
}