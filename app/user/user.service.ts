
import { type IUser } from "./user.dto";
import UserSchema from "./user.schema";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
/**
 * Creates a new user in the database.
 * @param data - The user data to create with
 * @returns The newly created user
 */
export const createUser = async (data: IUser) => {

    const result = await UserSchema.create({ ...data, active: true });
    return result;
};

/**
 * Compares a plain password with a hashed password to check for a match.
 * @param plainPassword - The plain text password to compare
 * @param hashedPassword - The hashed password to compare against
 * @returns A promise that resolves to true if the passwords match, otherwise false
 */

/**
 * Compares a plain password with a hashed password to check for a match.
 * @param plainPassword - The plain text password to compare
 * @param hashedPassword - The hashed password to compare against
 * @returns A promise that resolves to true if the passwords match, otherwise false
 */
export const comparePasswords = async (plainPassword: string, hashedPassword: string) => {
    return await bcrypt.compare(plainPassword, hashedPassword);
};

export const generateAuthToken = (userId: string, role: string) => {
    const token = jwt.sign({ _id: userId, role: role }, process.env.JWT_SECRET!, { expiresIn: '1h' });
    return token;
};



export const findUserByEmail = async(email: string) => {
    const result = await UserSchema.findOne({email})
    return result
}

export const updateUser = async (id: string, data: IUser) => {
    const result = await UserSchema.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return result;
};

export const editUser = async (id: string, data: Partial<IUser>) => {
    const result = await UserSchema.findOneAndUpdate({ _id: id }, data);
    return result;
};

export const deleteUser = async (id: string) => {
    const result = await UserSchema.deleteOne({ _id: id });
    return result;
};

export const getUserById = async (id: string) => {
    const result = await UserSchema.findById(id).lean();
    return result;
};

export const getAllUser = async () => {
    const result = await UserSchema.find({}).lean();
    return result;
};
export const getUserByEmail = async (email: string) => {
    const result = await UserSchema.findOne({ email }).lean();
    return result;
}

