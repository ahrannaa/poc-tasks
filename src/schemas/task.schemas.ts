import Joi from "joi";

export const taskValidationSchema = Joi.object ({
   task: Joi.string().min(3).required(),
   progress:Joi.string().required()
})
