import mongoose from "mongoose"

const SchemaMongoose = mongoose.Schema({
    name: {
       type:String
    },
    age: {
        type:Number
    },
    local: {
        type:String
    }
});

export default mongoose.model("starts", SchemaMongoose);
