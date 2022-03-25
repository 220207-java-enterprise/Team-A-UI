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
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"><strong className="headrr">Welcome, {props.currentUser?.username}!</strong></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Activate User</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/login">Log out <span className="sr-only">(current)</span></a>
                    </li>
                    </ul>
                </div>
            </nav>
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