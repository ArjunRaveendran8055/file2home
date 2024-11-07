import {body} from "express-validator"

export const validateSignUp = [
    body('userData.userName').isLength({ min : 6 }).withMessage("Username must be > than 6 characters"),
    body('userData.password').isLength({min:5}).withMessage("pass must be atleast 5 characters")
];

export const validateLogin=[
    body('user.password').isLength({min:5}).withMessage("pass must be atleast 5 characters")
]

