export default function () {
    return {
        token: localStorage.getItem('USER_TOKEN') != null ? localStorage.getItem('USER_TOKEN') : '',
        window: "login",
        errors : [],
    }
}