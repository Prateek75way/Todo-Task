import * as taskService from "./tasks.service";
import { createResponse } from "../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from 'express'


export const createTask = asyncHandler(async (req: Request, res: Response) => {
    
   
  
    const result = await taskService.createTask(req.body);
    res.send(createResponse(result, "Task created sucssefully"))
});