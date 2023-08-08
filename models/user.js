const {Schema, model} = require('mongoose');

const Joi = require('joi');

const {handleMongooseError} = require('../helpers');

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Set password for user'],
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter",
    },
    token: {
        type: String,
        default: '',
    },
    avatarURL: {
        type: String,
        required: true,
    },
    verify: {
        type: Boolean,
        default: false,
    },
    verificationToken: {
        type: String,
        required: [true, 'Verify token is required'],
    },
}, {versionKey: false});

const subscriptionEnum = ["starter", "pro", "business"];

const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    subscription: Joi.string().validate(...subscriptionEnum),
});

const emailSchema = Joi.object({
    email: Joi.string().email().required(),
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

const userSchemas = {
    registerSchema,
    emailSchema,
    loginSchema,
};

userSchema.post('save', handleMongooseError);

const User = model("user", userSchema);

module.exports = {
    User,
    userSchemas,
};