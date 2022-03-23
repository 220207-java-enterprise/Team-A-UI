export class Principal {
    id: String;
    username: String;
    role: String;
    token: String;

    constructor(id: String, username: String, role: String, token: String) {
        this.id = id;
        this.username = username;
        this.role = role;
        this.token = token;
    }
}
