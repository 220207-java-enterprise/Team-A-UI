import { Reimbursement } from "../models/reimbursement";
import { appClient } from "./app-client";

export const getAllReimbursements = async () => {
    return await appClient.get('/reimbursements/all-reimbursments')
}


export const findReimbursementByAuthor_id = async () => {
    return await appClient.get('/reimbursements/getreimbbyid')
}

export const getAll = async () => {
    return await appClient.get('/users/allusers')
}