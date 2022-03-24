import { Reimbursement } from "../models/reimbursement";
import { appClient } from "./app-client";

export const getAllReimbursements = async () => {
    return await appClient.get<Reimbursement[]>('/reimbursements')
}