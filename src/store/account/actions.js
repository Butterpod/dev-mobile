import axios from 'axios';

export function login({commit}, [email, password]) {
    axios.post('http://138.68.74.39/api/login', null, { params: {email: email, password : password}})
        .then(response => {
            commit("login", response.data.token)
        })
        .catch(error => {
            if (error.response.status === 401) {
                console.log(error.response)
                commit("error", "Identifiant ou mot de passe invalide");
            } else {
                commit("error", "Une erreur est survenue");
            }
        });
}

export function register ( { commit }, [email, password, name]) {
    axios
        .post('http://138.68.74.39/api/register', null, { params: { email: email, password: password, name: name}})
        .then(response => {
            commit("login", response.data.token)
        })
        .catch(error => {
            if (error.response.status === 409) {
                console.log(error.response)
                commit("error", error.response.data.message)
            } else {
                for (let e of error.response.data.errors) {
                    commit("error", e)
                }
            }
        });
}

/*
export function logout({commit}) {
    axios.post('http://138.68.74.39/api/logout', null,)
        .then(response => {
            commit("logout", response.data.token);
        })
}
 */