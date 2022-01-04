import mongoose, { Model, Document, ObjectId } from "mongoose";
import bcrypt from "bcrypt";
import express from "express";


interface IUser extends Document {
    email: string;
    password: string;
    name: string;
    cart: [];
    login?: (email: string, password: string) => IUser;
}

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minlength: 10,
        maxlength: 30,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        min: 6,
        max: 1024
    },
    cart: {
        type: [],
    }

},
    { timestamps: true });


userSchema.index({ name: "text", email: "text" });

userSchema.pre<IUser>("save", async function (next: any) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
});


const User: Model<IUser> = mongoose.model("User", userSchema);

export default User;