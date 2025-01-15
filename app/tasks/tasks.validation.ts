import { body } from 'express-validator';

export const createTask = [
    body('name').notEmpty().withMessage('name is required').isString().withMessage('name must be a string'),
    body('description').notEmpty().withMessage('description is required').isString().withMessage('email must be a string'),
    body('assignedTo').isBoolean().withMessage('assign this task to a User'),
    
];

export const updateTask = [
    body('name').notEmpty().withMessage('name is required').isString().withMessage('name must be a string'),
    body('description').notEmpty().withMessage('description is required').isString().withMessage('email must be a string'),
    body('assignedTo').isBoolean().withMessage('assign this task to a User'),
    
];