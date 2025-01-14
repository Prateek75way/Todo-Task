import { ITasks } from "./tasks.dto";
import TasksSchema from "./tasks.schema";


export const createTask = async (data: ITasks) => {

    const result = await TasksSchema.create({ ...data});
    return result;
};