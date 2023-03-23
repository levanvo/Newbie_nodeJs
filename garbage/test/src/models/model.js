import mongoose from "mongoose"

const SchemaMongoose = mongoose.Schema({
    name: String,
    age: Number,
    local: String
});

export default mongoose.model("test", SchemaMongoose);