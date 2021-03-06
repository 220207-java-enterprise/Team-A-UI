import { User as string, User } from "./user";

export class Reimbursement {

    id: string;
    amount: number;
    submitted: Date;
    resolved: Date;
    description: string;
    receipt: string;
    paymentId: string;
    authorId: User;
    resolverId: User;
    statusId: string;
    typeId: string;

    constructor (id: string, amount: number, submitted: Date, resolved: Date, description: string, receipt: string, paymentId: string, authorId: User, resolverId: User, statusId: {id: string, status: string}, typeId: {id: string, type: string}) {
        this.id = id;
        this.amount = amount;
        this.submitted = submitted;
        this.resolved = resolved;
        this.description = description;
        this. receipt = receipt;
        this. paymentId = paymentId;
        this.authorId = authorId;
        this.resolverId = resolverId;
        this.statusId = statusId.status;
        this.typeId =typeId.type;
        
    }

}