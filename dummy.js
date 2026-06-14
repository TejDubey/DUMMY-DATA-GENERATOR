import mongoose from "mongoose"
const emp=new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
})
const dmy=mongoose.model('dmy',emp)
export default dmy