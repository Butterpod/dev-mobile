export default function () {
    return {
        token: localStorage.getItem('USER_TOKEN') != undefined ? localStorage.getItem('USER_TOKEN') : '',
        window: "login",
        errors : [],
    }
}