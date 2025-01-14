import mongoose from "mongoose";

import bcrypt from 'bcrypt';
import { ITasks } from "./tasks.dto";

const Schema = mongoose.Schema;



const TaskSchema = new Schema<ITasks>({
        name: { type: String, required: true },
        description: { type: String, required: true },
        
        status: { type: String, required: true, enum: ["pending", "completed"], default: "pending" },
        assignedTo: { 
            type: Schema.Types.ObjectId, 
            ref: 'user',  // Reference to the User model
            required: true 
        },
}, { timestamps: true });

;

export default mongoose.model<ITasks>("task", TaskSchema);