import jwt from "jsonwebtoken"

export const createToken=(user)=>{
    const secret=process.env.JWT_SECRET
    return jwt.sign(user,secret,{expiresIn:"5m"})
}
