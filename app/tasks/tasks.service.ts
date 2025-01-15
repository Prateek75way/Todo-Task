import { ITasks } from "./tasks.dto";
import TasksSchema from "./tasks.schema";


export const createTask = async (data: ITasks) => {

    const result = await TasksSchema.create({ ...data});
    return result;
};
export const getTaskById = async (id: string) => {
    const result = await TasksSchema.findById(id)
    return result;
};

export const changeStatus = async (id: string, status: string) => {
    const result = await TasksSchema.findOneAndUpdate({ _id: id }, { status });
    return result;
};