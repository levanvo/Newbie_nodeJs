import axios from "axios";
import Joi from "joi";


const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  descript:Joi.string().required(),
});
export const add = async (req, res) => {
    try {
        const body = req.body;
        const {error} = productSchema.validate(body);
        if (error) {
            const errors = error.details.map((get) => get.message);
            return res.json({ message: errors+" ==> Unreasinable !" });
        }
        const data = await axios.post("http://localhost:3001/projects", body);
        console.log(data.data);
        return res.status(200).json({message:"reasonable",data})
    } catch (error) {
        return res.json({
            message: error,
        });
    }
};