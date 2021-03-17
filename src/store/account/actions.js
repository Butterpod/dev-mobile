import axios from 'axios';

export function login({commit}, [email, password]) {
    axios
        .post('http://138.68.74.39/api/login', null, { params: {email: email, password : password}})
        .then(response => {
            commit("login", response.data.token)
            const token = response.data.token
            localStorage.setItem('USER_TOKEN', token)
        })
        .catch(error => {
            localStorage.removeItem('USER_TOKEN');
            console.log(error.response);
            commit("error", error);
        });
}

export function register ( { commit }, [email, password, name]) {
    axios
        .post('http://138.68.74.39/api/register', null, { params: { email: email, password: password, name: name}})
        .then(response => {
            commit("login", response.data.token)
            const token = response.data.token
            localStorage.setItem('USER_TOKEN', token)
        })
        .catch(error => {
            localStorage.removeItem('USER_TOKEN');
            console.log(error.response);
            commit("error", error.response.message);
        });
}