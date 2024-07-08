import User from "../models/user.model.js"
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'


export const register = async (req, res, next) => {
    try{
        const newUser = await User.create(req.body)
        const userToken = jwt.sign(
            {userId: newUser._id, username: newUser.username},
            process.env.SECRET_KEY
            )
        console.log(userToken)
        res.cookie('userToken', userToken, {httpOnly:true})
        return res.status(201).json(newUser)
    }
    catch(error){
        return res.status(500).json(error)
    }
}

export const login = async (req, res, next) => {
    const {email, password} = req.body
    const potentialUser = await User.findOne({email:email})
    if(!potentialUser){
        return res.status(404).json({message: 'User not found'})
    }
    const isPasswordCorrect = await bcrypt.compare(password, potentialUser.password)
    if(!isPasswordCorrect){
        return res.status(400).json({ message: 'Invalid Credentials' })
    }
    const userToken = jwt.sign(
        {userId: potentialUser._id, username: potentialUser.username},
        process.env.SECRET_KEY
        )
    console.log(userToken)
    res.cookie('userToken', userToken)
    return res.status(201).json(potentialUser)
}


export const logout = async (req, res, next) => {
    res.clearCookie('userToken')
    res.status(200).json({message:'Successfully logged out'})
}

// //create 
// export const createUser = async(req, res, next) => {
//     try {
//         const USER = await User.create( req.body )
//         res.status(201).json(USER)
//     }
//     catch(error){
//         res.status(400).json(error)
//     }
// }

// //Read
// export const getAllUsers = async(req, res, next) => {
//     try{
//         const USERS = await User.find()
//         res.status(200).json(USERS)
//     }
//     catch(error){
//         res.status(400).json(error)
//     }
// }

// export const getUserByID = async( req, res, next ) => {
//     const { id } = req.params
//     try{
//         const USER = await User.findById( id )
//         res.status(200).json(USER)
//     }
//     catch(error){
//         res.status(400).json(error)
//     }
// }

// //Update 
// export const updateUserByID = async( req, res, next ) => {
//     const { id } = req.params
//     const options = {
//         new: true,
//         runValidators: true
//     }
//     try {
//         const UPDATED_USER = await User.findByIdAndUpdate( id, req.body, options )
//         res.status(200).json(UPDATED_USER)
//     }
//     catch(error){
//         res.status(400).json(error)
//     }
// }

// //Delete
// export const deleteUserByID = async( req, res, next ) => {
//     const { id } = req.params
//     try {
//         const DELETED_USER = await User.findByIdAndDelete( id )
//         res.status(200).json(DELETED_USER)
//     }
//     catch(error){
//         res.status(400).json(error)
//     }
// }
