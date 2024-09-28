import { Job } from "../models/job.models.js"

export const postJob = async (req, res) => {
    try {
        const {title, description, requirements, salary, location, jobType, experienceLevel, position, company} = req.body
        const userId = req.id
        if(!title || !description || !requirements || !salary || !location || !jobType || !experienceLevel || !position || !company) {
            return res.status(400).json({
                message: "Some fields are missing",
                success: false
            })
        }
        const job = await Job.create({title, description, requirements: requirements.split(","), salary: Number(salary), location, jobType, experienceLevel, position, company, createdBy: userId})

        return res.status(200).json({
            message: "New job created successfully!",
            job,
            success: true
        })

    } catch (err) {
        console.log(`error at postJob controller backend: ${err}`)
    }
}

export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || ""
        const query = {
            $or: [
                {title: {$regex: keyword, $options: "i"}},
                {description: {$regex: keyword, $options: "i"}},
            ]
        }
        const jobs = await Job.find(query).populate({
            path: "company"
        }).populate({
            path: "createdBy"
        }).sort({createdAt: -1})
        if(!jobs) {
            return res.status(404).json({
                message: "Jobs not found",
                success: false
            })
        }
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (err) {
        console.log(`error occured at getAllJobs controller backend: ${err}`)
    }
}

export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id
        const job = await Job.findById(jobId)
        if(!job) {
            return res.status(404).json({
                message: "Jobs not found",
                success: false
            })
        }
        return res.status(200).json({
            job,
            success: true
        })
    } catch (err) {
        console.log(`error occured at getJobById controller backend: ${err}`)
    }
}


export const adminJobs = async (req, res) => {
    try {
        const adminId = req.id
        const jobs = await Job.find({createdBy: adminId})
        if(!jobs) {
            return res.status(404).json({
                message: "Jobs not found!",
                success: false
            })
        }
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (err) {
        console.log(`error occured at adminJobs controller backend: ${err}`)
    }
}