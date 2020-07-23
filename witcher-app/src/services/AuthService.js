const LOGGED_USER = "logged-user";

export default class AuthService {

    static doLogin(email) {
        window.localStorage.setItem(LOGGED_USER, email);
    }

    static doLogout() {
        window.localStorage.removeItem(LOGGED_USER);
    }

    static isLogged() {
        const loggedUser = localStorage.getItem(LOGGED_USER);
        return loggedUser !== null && loggedUser !== undefined;
    }

}