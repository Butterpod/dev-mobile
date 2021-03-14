export const isConnected = (state) => {
    return state.token !== '';
}

export const getWindow = (state) => {
    return state.window;
}