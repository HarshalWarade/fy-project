import { User } from "../models/user.models.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    try {
        const {firstName, middleName, lastName, gender, email, password, country, phoneNumber, role} = req.body
        if(!firstName || !lastName || !gender || !email || !password || !country || !phoneNumber || !role) {
            return res.status(400).json({
                message: "Some field is missing",
                success: false
            })
        }
        const user = await User.findOne({email})
        if(user) {
            return res.status(400).json({
                message: "This email is already registered!",
                success: false
            })
        }

        const hashedPassword = await bcrypt.hash(password, 16)

        await User.create({
            firstName, lastName, middleName, gender, email, country, password: hashedPassword, phoneNumber, role
        })

        return res.status(201).json({
            message: "Account created successfully!",
            success: true
        })

    } catch (err) {
        console.log(`Error at register controller backend: ${err}`)
    }
}

export const login = async (req, res) => {
    try {
        const {email, password, role} = req.body
        
        if( !email || !password || !role ) {
            return res.status(400).json({
                message: "Some fileds are missing",
                success: false
            })
        }
        
        let user = await User.findOne({email})
        if(!user) {
            return res.status(400).json({
                message: "Incorrect Credentials!",
                success: false
            })
        }
        
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        
        if(!isPasswordCorrect) {
            return res.status(400).json({
                message: "Incorrect Credentials!",
                success: false
            })
        }
        
        if(role != user.role) {
            return res.status(400).json({
                message: "This ain't your role!",
                success: false
            })
        }
        
        const tokenData = {
            userId: user._id
        }
        const token = jwt.sign(tokenData, process.env.SECRETKEY, {expiresIn: '1d'})
        
        user = {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            gender: user.gender,
            role: user.role,
            profile: user.profile
        }
        
        return res.status(200).cookie('token', token, {maxAge: 1*24*60*60*1000, httpsOnly: true, sameSite: 'strict'}).json({
            message: `Welcome back, ${user.firstName}!`,
            user,
            success: true
        })

    } catch (err) {
        console.log(`Error occured at login controller backend: ${err}`)
    }
}

export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", {maxAge: 0}).json({
            message: "Logged out successfully!",
            success: true
        })
    } catch (err) {
        console.log(`error at logout controller backend: ${err}`)
    }
}

export const updateProfile = async (req, res) => {
    try {
        const { firstName, lastName, email, phoneNumber, bio, skills } = req.body

        const file = req.file


        let skillsArray

        if(skills) {
            skillsArray = skills.split(",")
        }

        const userId = req.id // check for errors once in live (_)       

        let user = await User.findById(userId)
        if(!user) {
            return res.status(400).json({
                message: "User is invalid!",
                success: false
            })
        }

        if(firstName) {
            user.firstName = firstName
        }
        if(lastName) {
            user.lastName = lastName
        }
        if(email) {
            user.email = email
        }
        if(phoneNumber) {
            user.phoneNumber = phoneNumber
        }
        if(bio) {
            user.profile.bio = bio
        }
        if(skills) {
            user.profile.skills = skillsArray
        }

        await user.save()

        user = {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            gender: user.gender,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).json({
            message: "Profile Updated Successfully",
            user,
            success: true
        })
        

    } catch (err) {
        console.log(`error at updateProfile controller backend: ${err}`)
    }
}