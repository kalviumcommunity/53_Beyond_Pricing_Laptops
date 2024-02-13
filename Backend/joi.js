const joi = require('joi')
const Joi_model=joi.object({
    Name:joi.string().max(25).required(),
    image:joi.string().required(),
    RAM_GB:joi.number().required(),
    ROM_GB:joi.number().required(),
    RAM_Type:joi.string().required(),
    ROM_Type:joi.string().required(),
    Battery_hrs:joi.number().required(),
    Operating_System:joi.string().required(),
    Price:joi.number().required(),
    Review:joi.string().required()
})

module.exports=Joi_model;