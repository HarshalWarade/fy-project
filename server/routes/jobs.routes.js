import express from 'express'
import isAuthenticated from '../middlewares/isauthenticated.js'
import { adminJobs, getAllJobs, getJobById, postJob } from '../controllers/job.controllers.js'

const router = express.Router()

router.route('/post').post(isAuthenticated, postJob)
router.route('/get').get(isAuthenticated, getAllJobs)
router.route('/get/:id').get(isAuthenticated, getJobById)
router.route('/adminjobs').get(isAuthenticated, adminJobs)



export default router