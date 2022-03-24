export class User {

    id: string;
    username: string;
    email: string;
    password: string;
    givenName: string;
    surname: string;
    isActive: boolean;
    role: UserRole;
    //role: {id string, roleName: string}

    constructor(id: string,  username: string, email: string, password: string, givenName: string, surname: string, isActive: boolean, role: UserRole) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.givenName = givenName;
        this.surname = surname;
        this.isActive = isActive;
        this.role = role;
    }

}


    
}