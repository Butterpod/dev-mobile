import axios from "axios";

export function load({commit}) {
    commit("resetState"); // On réinitialise le State (si jamais un autre compte a utilisé le site) ca évitera d'avoir son state pendant le loading
    const AuthStr = 'Bearer '.concat(localStorage.getItem('USER_TOKEN'));
    axios.get('http://138.68.74.39/api/todolists', { headers: { Authorization: AuthStr } })
        .then(response => {
            localStorage.setItem("data", JSON.stringify(response.data))
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
            localStorage.setItem('current_todo', JSON.stringify(response.data));
            localStorage.setItem('currentListId', id);
            commit('setFiltre', 'all');
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
            localStorage.setItem("data",JSON.stringify(JSON.parse(localStorage.getItem("data")).concat(response.data)));
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
            localStorage.setItem("current_todo",JSON.stringify(JSON.parse(localStorage.getItem("current_todo")).concat(response.data)))
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
            let current = JSON.parse(localStorage.getItem("current_todo"));
            current.find(el => el.id === response.data.id).completed=parseInt(completed);
            localStorage.setItem("current_todo",JSON.stringify(current));
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
    axios.patch('http://138.68.74.39/api/todo/' . concat(id), null, { headers: headers , params: {name : name, completed : completed, todolist_id : todolist_id}})
        .then(response => {
            let current = JSON.parse(localStorage.getItem("current_todo"));
            current.find(el => el.id === response.data.id).name=name;
            localStorage.setItem("current_todo",JSON.stringify(current));
            commit("modify", response.data);
            console.log("j'ai modif");
        })
        .catch((error) => {
            console.log('error ' + error);
        });
}

export function deleteTodoList({commit}, todolist_id) {
    const AuthStr = 'Bearer '.concat(localStorage.getItem('USER_TOKEN'));
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': AuthStr,
    }
    axios
        .delete('http://138.68.74.39/api/todolist/' + todolist_id, { headers : headers })
        .then(response => {
            let todelete = JSON.parse(localStorage.getItem("data"));
            let index = todelete.indexOf(todelete.find(el => el.id === todolist_id));
            todelete.splice(index,1);
            localStorage.setItem("data",JSON.stringify(todelete));
            commit("deleteList", [todolist_id, response.data]);
        })
        .catch((error) => {
            console.log('error ' + error);
        });
}

export function deleteTodo({commit}, id) {
    const AuthStr = 'Bearer '.concat(localStorage.getItem('USER_TOKEN'));
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': AuthStr,
    }
    axios
        .delete('http://138.68.74.39/api/todo/' + id, {headers: headers})
        .then(response => {
            let todelete = JSON.parse(localStorage.getItem("current_todo"));
            let index = todelete.indexOf(todelete.find(el => el.id === id));
            todelete.splice(index,1);
            localStorage.setItem("current_todo",JSON.stringify(todelete));
            commit("deleteTodo", [id, response.data]);
        })
        .catch((error) => {
            console.log('error ' + error);
        });
}