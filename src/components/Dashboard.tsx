import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { updateLanguageServiceSourceFile } from "typescript";
import { Reimbursement } from "../models/reimbursement";
import { Principal } from "../models/principal";
import { getAllReimbursements } from "../remote/reimbursement-service";

interface IDashboardProps {
    currentUser: Principal | undefined
}

function Dashboard(props: IDashboardProps) {
    const[reimbursements, setReimbursments] = useState<any[]>([]);

   

    useEffect(() => {
        getAllReimbursements().then(resp => {
                console.log(resp)
                setReimbursments(resp.data)
            });
    }, []
    );

    return (

        <>
            <h1>Welcome, {props.currentUser?.username}!</h1>
            <table className="table table-dark"><thead >
                <tr>
                <th scope="col">#</th>
                <th scope="col">Reimbursement Id:</th>
                <th scope="col">Amount:</th>
                <th scope="col">Submitted:</th>
                <th scope="col">Resolved:</th>
                <th scope="col">Description:</th>
                <th scope="col">Receipt:</th>
                <th scope="col">Payment Id:</th>
                <th scope="col">Author Id:</th>
                <th scope="col">Resolver Id:</th>
                <th scope="col">Status Id:</th>
                <th scope="col">Type Id:</th>
                </tr>
            </thead>
            <tbody>
            {reimbursements.map((reimbursement, idx) => {
                return(
                    <tr>
      <th scope="row" key={idx}>{idx}</th>
      <td>{reimbursement.reimbId}</td>
      <td>{reimbursement.amount}</td>
      <td>{reimbursement.submitted}</td>
      <td>{reimbursement.resolved}</td>
      <td>{reimbursement.description}</td>
      <td>{reimbursement.receipt}</td>
      <td>{reimbursement.paymentId}</td>
      <td>{reimbursement.authorId.username}</td>
      <td>{reimbursement.resolverId?.username}</td>
      <td>{reimbursement.statusId.status}</td>
      <td>{reimbursement.typeId.type}</td>
    </tr>
                )

            })}
            </tbody>
        </table>
        </>
    )
        }

export default Dashboard;