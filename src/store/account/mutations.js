export function login (state, token) {
    state.token = token;
    console.log(state.token);
}

export function error (state, error) {
    state.errors.push(error);
}

export function logout(state) {
    state.token = '';
    localStorage.removeItem('USER_TOKEN');
    localStorage.clear();
}

export function setWindow(state, windowName) {
    state.window = windowName;
}