export function displayer ({ commit }, id) {
    commit('verifyDisplay');
    commit('display', id);
}