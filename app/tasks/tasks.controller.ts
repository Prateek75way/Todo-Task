import * as taskService from "./tasks.service";
import { createResponse } from "../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from 'express'
import tasksSchema from "./tasks.schema";
import { IUser } from "../user/user.dto";


export const createTask = asyncHandler(async (req: Request, res: Response) => {
    
   
  
    const result = await taskService.createTask(req.body);
    res.send(createResponse(result, "Task created sucssefully"))
});

export const changeStatus = asyncHandler(async (req: Request, res: Response) => {
    const taskId = req.params.id;
    const newStatus = req.body.status;

    // Fetch the task by ID
    const task = await taskService.getTaskById(taskId);

    // Check if the task exists
    if (!task) {
        throw new Error("Task not found");
    }

    // Debugging: Log the task object
    console.log("Fetched task:", task);

    // Check if assignedTo exists
    if (!task.assignedTo) {
        throw new Error("Task does not have an assigned user");
    }

    // Check if the user is authenticated
    if (!req.user) {
        throw new Error("User  not authenticated");
    }
    console.log("User:", req.user);
    console.log("task", task);
    

    // Check if the user is allowed to change the task status
    if (task.assignedTo.toString() !== (req.user as IUser)._id.toString()) {
        throw new Error("You are not allowed to change this task");
    }

    // Change the task status
    const result = await taskService.changeStatus(taskId, newStatus);

    // Send the response
    res.send(createResponse(result, "Task updated successfully"));
});