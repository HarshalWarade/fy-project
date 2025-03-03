import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female'], required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  country: {type: String, required: true},
  role: { type: String, enum: ['employee', 'employer'], required: true },

  profile: {  
    
    bio: {type: String, default: "" },
    resume: { type: String, default: "" },
    skills: [{type: String}],
    videoIntroduction: {type: String, default: "" },
    resumeOriginalName: {type: String, default: "" },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    
    profilePhoto: {
        type: String,
        default: "https://static.vecteezy.com/system/resources/thumbnails/002/387/693/small_2x/user-profile-icon-free-vector.jpg"
    },
    
    freelanceGigs: [
        {
          title: { type: String },
          description: { type: String },
          postedAt: { type: Date, default: Date.now },
        },
    ],

  }
}, {timestamps: true})

export const User = mongoose.model('User', userSchema)