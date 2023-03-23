import mongoose from "mongoose";
const mongooseSchema = mongoose.Schema({
    name: String,
    price: Number,
});
// const Product=mongoose.model("Product", mongooseSchema);
export default mongoose.model("Products", mongooseSchema);