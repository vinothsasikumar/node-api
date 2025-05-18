import mongoose from "mongoose";

const userMongoSchema = new mongoose.Schema({
    name: String,
    email: String
}, { collection: 'users', versionKey: false });

export const User = mongoose.model('User', userMongoSchema);