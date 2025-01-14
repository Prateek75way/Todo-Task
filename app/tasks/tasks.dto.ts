import { type BaseSchema } from "../common/dto/base.dto";
import { Types } from "mongoose"
export interface ITasks {
    name: string,
    status: string,
    description: string,
    assignedTo: Types.ObjectId
}