import Joi from 'joi'


const loginSchema = Joi.object({
	email: Joi.string().email({ tlds: { allow: false } }),
	password: Joi.string().min(5).max(80).required()
}).length(2)

const signUpSchema = Joi.object({
	email: Joi.string().email({ tlds: { allow: false } }),
	password: Joi.string().min(5).max(80).required(),
	repeatPassword: Joi.ref('password')
}).length(3)


export {
	loginSchema,
	signUpSchema,
}
