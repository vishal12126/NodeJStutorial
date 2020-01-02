const Joi = require('joi');
const arrayString = ['banana','apple','cheese'];
const arrayObjects = [{example: 'example1'},{example:'example2'}];
const userInput = {personalInfo: {
    streetAddress: '12345678',
    city : 'alaska',
    state: 'US'
},
preferences : arrayString,
pref : arrayObjects};

const personalInfoSchema = Joi.object().keys({
    streetAddress : Joi.string().trim().required(),
    city : Joi.string().trim().required(),
    state : Joi.string().trim().length(2).required()
});

const preferencesSchema = Joi.array().items(Joi.string());
const prefSchema = Joi.array().items(Joi.object().keys({
    example : Joi.string().required()
}));

const schema = Joi.object().keys({
    personalInfo : personalInfoSchema,
    preferences : preferencesSchema,
    pref : prefSchema
});

Joi.validate(userInput, schema, (err,result)=> {
    if(err){
        console.log(err);
    }
    else 
    console.log(result);
})