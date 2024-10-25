import {body} from "express-validator"

export const validateSignUp = [
    body('userData.userName').isLength({ max: 12 }).withMessage("Username must be less than 12 characters"),
    body('userData.password').isLength({min:5}).withMessage("pass must be atleast 5 characters")
];

