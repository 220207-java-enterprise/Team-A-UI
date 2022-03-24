import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Flashcard } from "../models/flashcard";
import { Principal } from "../models/principal";
import { getAllCards } from "../remote/card-service";

interface IDashboardProps {
    currentUser: Principal | undefined
}

function UserDashboard(props: IDashboardProps) {
    const[users, updateUser] = useState<any[]>([]);

    useEffect(() => {
        if(users.length == 0) {
            getAllCards().then(resp => )
        }
    })
}