import { Principal } from "../models/principal";
import { appClient } from "./app-client";

export const authenticate = async (credentials: {username: string, password: string}) => {
    return await appClient.post<Principal>('/users/login', credentials, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

export const logout = (setCurrentUser: (nextUser: Principal | undefined) => void) => {
    setCurrentUser(undefined);
}