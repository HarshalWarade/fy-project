// import Company from '../models/company.models.js'
import { Company } from '../models/company.models.js'
export const registerCompany = async (req, res) => {
    try {
        const {name, location, logo} = req.body
        if(!name) {
            return res.status(400).json({
                message: "Company name is required!",
                success: false
            })
        }
        let company = await Company.findOne({name: name})
        if(company) {
            return res.status(400).json({
                message: "The company with same name exists!",
                success: false
            })
        }
        company = await Company.create({
            name: name,
            location: location,
            logo: logo,
            userId: req.id
        })
        return res.status(201).json({
            message: "Company registered successfully!",
            company,
            success: true
        })
    } catch (err) {
        console.log(`error at registerCompany controller backend: ${err} `)
    }
}

export const getCompany = async(req, res) => {
    try {
        const userId = req.id
        const companies = await Company.find({userId})

        if(!companies) {
            return res.status(404).json({
                message: "Company not found!",
                success: false
            })
        }

        return res.status(200).json({
            companies,
            success: true
        })

    } catch (err) {
        console.log(`error at getCompany controller backend: ${err}`)
    }
}


export const getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id
        const company = await Company.findById(companyId)
        
        if(!company) {
            return res.status(404).json({
                message: "Company not found!",
                success: false
            })
        }

        return res.status(200).json({
            company,
            success: true
        })

    } catch (err) {
        console.log(`error at getCompanyById controller backend: ${err}`)
    }
}

export const updateCompany = async (req, res) => {
    try {
        const {name, description, website, location} = req.body
        const file = req.file

        const updateData = {name, description, website, location}

        const company = await Company.findByIdAndUpdate(req.params.id, updateData, {new: true})
        
        if(!company) {
            return res.status(404).json({
                message: "Company not found!",
                success: false
            })
        }

        return res.status(200).json({
            message: "Company information updated!",
            success: true
        })

    } catch (err) {
        console.log(`error at updateCompany controller backend: ${err}`)
    }
}