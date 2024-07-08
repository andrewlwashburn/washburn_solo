import { model, Schema } from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'
import validator from 'validator'
import bcrypt from 'bcrypt'
import isEmail from 'validator/lib/isEmail.js'

const UserSchema = new Schema ({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "That email is already taken"],
        validte: [isEmail, "Invalid email"]
    },
    firstName: {
        type: String,
        required: [true, "First name is required."],
        minLength: [2, "First name must be at least two characters."],
        maxLength: [15, "First name must not exceed fifteen characters."],
    },
    lastName: {
        type: String,
        required: [true, "Last name is required."],
        minLength: [2, "Last name must be at least two characters."],
        maxLength: [15, "Last name must not exceed fifteen characters."]
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        minLength: [8, "Password must be at least eight characters."]
    },
    address: {
        type: String,
        required: [true, 'Address is required.'],
    },
    city: {
        type: String,
        required: [true, 'City is required.'],
    },
    state: {
        type: String,
        required: [true, 'State is required.']
    }
}, {timestamps: true})

UserSchema.plugin(mongooseUniqueValidator)

UserSchema.virtual('confirmPassword')
    .get(function() {
        return this._confirmPassword
    })
    .set(function(value) {
        return this._confirmPassword = value
    })

UserSchema.pre('validate', function(next){
    if(this.password !== this.confirmPassword){
        this.invalidate('confrimPassword', 'Passwords do not match ')
    }
    next()
})

UserSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash
            next()
        })
})



const User = model(`User`, UserSchema)
export default User

