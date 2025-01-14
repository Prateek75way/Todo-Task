
import * as userService from "./user.service";
import { createResponse } from "../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from 'express'
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const createUser = asyncHandler(async (req: Request, res: Response) => {
    const {email} = req.body
    const existingUser = await userService.findUserByEmail(email)
    if(existingUser){
        throw new Error("User already exists")
    }
    const result = await userService.createUser(req.body);
    res.send(createResponse(result, "User created sucssefully"))
});





export const loginUser = asyncHandler(async (req: Request, res: Response) => {
    const {email, password} = req.body

    const user = await userService.findUserByEmail(email);
    if (!user) {
        throw new Error("User not found");
    }

    const isPasswordValid = await userService.comparePasswords(password, user.password);
    if (!isPasswordValid) {
        throw new Error("Invalid credentials");
    }

    const token = userService.generateAuthToken(user._id, user.role); 

    res.cookie('token', token, {
        httpOnly: true,           // Ensures the cookie can't be accessed by client-side JavaScript
        secure: process.env.NODE_ENV === 'production', // Set to true in production (HTTPS only)
        maxAge: 3600000,          // Set the cookie expiry time (1 hour in milliseconds)
              
    });
    res.json(createResponse({ token }, "Login successful")); 
})

export const updateUser = asyncHandler(async (req: Request, res: Response) => {
    const result = await userService.updateUser(req.params.id, req.body);  
    res.send(createResponse(result, "User updated sucssefully"))
});

export const editUser = asyncHandler(async (req: Request, res: Response) => {
    const result = await userService.editUser(req.params.id, req.body);
    res.send(createResponse(result, "User updated sucssefully"))
});

export const deleteUser = asyncHandler(async (req: Request, res: Response) => {
    const result = await userService.deleteUser(req.params.id);
    res.send(createResponse(result, "User deleted sucssefully"))
});


export const getUserById = asyncHandler(async (req: Request, res: Response) => {
    const result = await userService.getUserById(req.params.id);
    res.send(createResponse(result))
});


export const getAllUser = asyncHandler(async (req: Request, res: Response) => {
    const result = await userService.getAllUser();
    res.send(createResponse(result))
});
