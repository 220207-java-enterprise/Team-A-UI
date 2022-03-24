export class User {

    id: string;
    username: string;
    email: string;
    password: string;
    givenName: string;
    surname: string;
    isActive: boolean;
    role: string;

    constructor(id: string,  username: string, email: string, password: string, givenName: string, surname: string, isActive: boolean, role: {id: string, roleName: string}) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.givenName = givenName;
        this.surname = surname;
        this.isActive = isActive;
        this.role = role.roleName;
    }

}
