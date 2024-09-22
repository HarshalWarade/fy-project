import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  role: { type: String, enum: ['Employee', 'Employer'], required: true },

  profile: {
    
    bio: {type: String},
    resume: {type: String},
    skills: [{type: String}],
    videoIntroduction: {type: String},
    resumeOriginalName: {type: String},
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