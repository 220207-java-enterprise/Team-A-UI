import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { updateLanguageServiceSourceFile } from "typescript";
import { Reimbursement } from "../models/reimbursement";
import { Principal } from "../models/principal";
import { findReimbursementByAuthor_id, getAll, getAllReimbursements } from "../remote/reimbursement-service";
import { stringify } from "querystring";

interface IDashboardProps {
    currentUser: Principal | undefined
}

function AdminDashboard(props: IDashboardProps) {
    const[users, setusers] = useState<any[]>([]);

   

    useEffect(() => {
        getAll().then(resp => {
                console.log(resp)
                setusers(resp.data)
            });
    }, []
    );

    return (

        <>
            <h1>Welcome, {props.currentUser?.username}!</h1>
            <table className="table table-dark"><thead >
                <tr>
                <th scope="col">#</th>
                <th scope="col">User Id:</th>
                <th scope="col">Username:</th>
                <th scope="col">Email:</th>
                <th scope="col">Password:</th>
                <th scope="col">Given Name:</th>
                <th scope="col">Surname:</th>
                <th scope="col">Active:</th>
                <th scope="col">Role:</th>
                </tr>
            </thead>
            <tbody>
            {users.map((user, idx) => {
                return(
                    <tr>
                    <th scope="row" key={idx}>{idx}</th>
                    <td>{user.userId}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.givenName}</td>
                    <td>{user.surname}</td>
                    <td>{user.isActive.toString()}</td>
                    <td>{user.role.roleName}</td>
                    </tr>
                )

            })}
            </tbody>
        </table>
        </>
    )
        }

export default AdminDashboard;