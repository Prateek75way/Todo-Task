
import { Router } from "express";
import { catchError } from "../common/middleware/cath-error.middleware";
import * as taskController from "./tasks.controller";
import * as tasksValidator from "./tasks.controller";
import { roleAuth } from "../common/middleware/role-auth.middleware";


const router = Router();

router
       // .get("/", userController.getAllUser)
        
        .post("/", roleAuth(["ADMIN"]),tasksValidator.createTask, catchError,taskController.createTask)
        // .put("/:id", userValidator.updateUser, catchError, userController.updateUser)
        // .patch("/:id", userValidator.editUser, catchError, userController.editUser)
        // .post("/login", userValidator.loginUser, catchError, userController.loginUser)

export default router;

