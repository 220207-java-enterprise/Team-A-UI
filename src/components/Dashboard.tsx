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
    const[reimbursements, updatereimbursements] = useState<any[]>([]);

    useEffect(() => {
        if(reimbursements.length == 0) {
            getAllReimbursements().then(resp => {
                updatereimbursements(resp.data);
            });
        }
    });

    return (
        !props.currentUser ? <Navigate to="/login"/> :
        <>
            <h1>Welcome, {props.currentUser.username}!</h1>
            {reimbursements.map((reimbursement, idx) => {
                return (
                    <div key={idx}>
                        <h4>Reimbursement Id: {reimbursement.id}</h4>
                        <h5>Amount: {reimbursement.amount}</h5>
                        <h5>Submitted: {reimbursement.submitted}</h5>
                        <h5>Resolved: {reimbursement.resolved}</h5>
                        <h5>Description: {reimbursement.description}</h5>
                        <h5>Receipt: {reimbursement.receipt}</h5>
                        <h5>Payment Id: {reimbursement.paymentId}</h5>
                        <h5>Author Id: {reimbursement.authorId.username}</h5>
                        <h5>Resolver Id: {reimbursement.resolverId.username}</h5>
                        <h5>Status Id: {reimbursement.statusId.status}</h5>
                        <h5>Type Id: {reimbursement.typeId.type}</h5>
                    </div>
                )
            })}
        </>
    )
}

export default Dashboard;