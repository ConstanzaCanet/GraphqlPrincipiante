import mongoose from "mongoose";

let Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    age: Number,
    phone: String,
    email: String,
});

export default mongoose.model('User',userSchema)