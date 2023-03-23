import SchemaMongoose from "../models/model"
import joi from "joi"

const SchemaJoi = joi.object({
    name: joi.string().required(),
    age: joi.number().required(),
    local:joi.string()
});

export const getAll = async (req, res) => {
    try { 
        const data =await SchemaMongoose.find();
        return res.json({ message: "Tat ca du lieu ",data });
    } catch (err) { res.status(400).json({ message: err }) }; 
};

export const getOne = async (req, res) => {
    try { 
        const data =await SchemaMongoose.findById(req.params.id);
        if (!data) { return res.status(400).json({ message: "Khong co du lieu" }) };
        return res.json({ message: "Tim thay thanh cong ",data });
    } catch (err) { res.status(400).json({ message: err }) };  
};
  
export const Create = async (req, res) => {
    try { 
        const { error } = SchemaJoi.validate(req.body);
        if (error) {
            const show_error = error.details[0].message;
            return res.status(404).json({ message: "Sai validate Joi ===>>> ", show_error });
        }
        const data = await SchemaMongoose.create(req.body);
        if (!data) { return res.status(404).json({ message: "Khong co du lieu" }) };
        return res.json({ message: "Them thanh cong ",data });
    } catch (err) { res.status(400).json({ message: err }) };
};
  
export const Update = async (req, res) => {
    try {
        const { error } = SchemaJoi.validate(req.body);
        if (error) {
            const show_error = error.details[0].message;
            return res.status(404).json({ message: "Sai validate Joi ===>>> ", show_error });
        }
        const data =await SchemaMongoose.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if (!data) { return res.status(404).json({ message: "Khong co du lieu" }) };
        return res.json({ message: "Sua thanh cong ",data });
    } catch (err) { res.status(400).json({ message: err }) };
};
  
export const Remove = async (req, res) => {
    try { 
        const data = await SchemaMongoose.findByIdAndDelete(req.params.id);
        if(!data){return res.status(404).json({message: "Khong tim thay data do da xoa hoac khong ton tai !"})}
        return res.json({ message: "Xoa thanh cong ",data });
    } catch (err) { res.status(400).json({ message: err }) };
  };