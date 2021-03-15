import axios from "axios";

export function load({commit}) {
    commit("resetState"); // On réinitialise le State (si jamais un autre compte a utilisé le site) ca évitera d'avoir son state pendant le loading
    const AuthStr = 'Bearer '.concat(localStorage.getItem('USER_TOKEN'));
    axios.get('http://138.68.74.39/api/todolists', { headers: { Authorization: AuthStr } })
        .then(response => {
            console.log('loading ...');
            console.log(response.data);
            commit('load', response.data);
        })
        .catch((error) => {
            console.log('error ' + error);
        });
}

export function getUser() {
    const AuthStr = 'Bearer '.concat(localStorage.getItem('USER_TOKEN'));
    axios.get('http://138.68.74.39/api/user', { headers: { Authorization: AuthStr } })
        .then(response => {
            localStorage.setItem('user', response.data);
        })
        .catch((error) => {
            console.log('error ' + error);
        });
}

export function getTodo({commit}, id) {
    const AuthStr = 'Bearer '.concat(localStorage.getItem('USER_TOKEN'));
    axios.get('http://138.68.74.39/api/todos/' .concat(id), { headers: { Authorization: AuthStr } })
        .then(response => {
            commit('setCurrentTodos', response.data);
            commit('setCurrentListId', id);
        })
        .catch((error) => {
            console.log('error ' + error);
        });
}

export function createTodoList({commit}, name) {
    const AuthStr = 'Bearer '.concat(localStorage.getItem('USER_TOKEN'));

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': AuthStr,
    }

    axios.post('http://138.68.74.39/api/todolist?name=' . concat(name), null, { headers: headers })
        .then(response => {
            console.log("Todolist ajouté");
            commit('addTodoList', response.data);
        })
        .catch((error) => {
            console.log('error ' + error);
        });
}

export function createTodo({commit}, [name, completed, todolist_id]) {
    const AuthStr = 'Bearer '.concat(localStorage.getItem('USER_TOKEN'));

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': AuthStr,
    }

    axios.post('http://138.68.74.39/api/todo', null, { headers: headers , params: {name : name, completed : completed, todolist_id : todolist_id}})
        .then(response => {
            console.log("ca marche");
            commit('addTodo', response.data);
        })
        .catch((error) => {
            console.log('error ' + error);
        });
}

export function completeTodo({commit}, [id, name, completed, todolist_id]) {
    const AuthStr = 'Bearer '.concat(localStorage.getItem('USER_TOKEN'));
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': AuthStr,
    }
    axios.post('http://138.68.74.39/api/completeTodo/' . concat(id), null, { headers: headers , params: {name : name, completed : completed, todolist_id : todolist_id}})
        .then(response => {
            commit('complete', response.data);
        })
        .catch((error) => {
            console.log('error ' + error);
        });
}

export function modifyTodo({commit}, [id, name, completed, todolist_id]) {
    const AuthStr = 'Bearer '.concat(localStorage.getItem('USER_TOKEN'));
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': AuthStr,
    }
    axios.post('http://138.68.74.39/api/todo/' . concat(id), null, { headers: headers , params: {name : name, completed : completed, todolist_id : todolist_id}})
        .then(response => {
            commit("modify", response.data);
        })
        .catch((error) => {
            console.log('error ' + error);
        });
}