export const getTodoLists = (state) => {
    return state.todoLists;
}

export const getTodoList = (state) => (id) => {
    // Il faut find dans le tableau le 1er élément ayant le même id.
    return state.todoLists.find(el => el.id === id);
}

export const getTodo = (state, getters) => (id) => {
    return getters.getTodoList(id).todos;
}

export const getFilteredTodos = (state, getters) => (id) => {
    if (getters.getTodoList(id).filtre === 'todo') {
        console.log(getters.getTodo(id).filter(todo => !todo.completed));
        return getters.getTodo(id).filter(todo => !todo.completed);
    }
    else if (getters.getTodoList(id).filtre === 'finished') {
        return getters.getTodo(id).filter(todo => todo.completed);
    }
    return getters.getTodo(id);
}

export const getFilter = (state, getters) => (id) => {
    return getters.getTodoList(id).filtre;
}

export const getNewTodo = (state, getters) => (id) => {
    return getters.getTodoList(id).newTodo;
}