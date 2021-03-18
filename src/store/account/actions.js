import axios from 'axios';

export function login({commit, dispatch}, [email, password]) {
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
        })
        .finally(() => dispatch('getUser'));
}

export function register ( { commit, dispatch}, [email, password, name]) {
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
        })
        .finally(() => dispatch('getUser'));
}

export function getUser( {commit}) {
    const AuthStr = 'Bearer '.concat(localStorage.getItem('USER_TOKEN'));
    axios.get('http://138.68.74.39/api/user', { headers: { Authorization: AuthStr } })
        .then(response => {
            localStorage.setItem('currentUser', JSON.stringify(response.data));
            commit('setUser', response.data);
        })
        .catch((error) => {
            console.log('error ' + error);
        });
}