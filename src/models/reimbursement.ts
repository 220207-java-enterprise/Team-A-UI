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
    statusId: ReimbursementStatus;
    typeId: ReimbursementType;

    constructor (id: string, amount: number, submitted: Date, resolved: Date, description: string, receipt: string, paymentId: string, authorId: User, resolverId: User, statusId: ReimbursementStatus, typeId: ReimbursementType) {
        this.id = id;
        this.amount = amount;
        this.submitted = submitted;
        this.resolved = resolved;
        this.description = description;
        this. receipt = receipt;
        this. paymentId = paymentId;
        this.authorId = authorId;
        this.resolverId = resolverId;
        this.statusId = statusId;
        this.typeId =typeId;
        
    }

}