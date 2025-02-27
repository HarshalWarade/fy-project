import jwt from 'jsonwebtoken'

const isAuthenticated = async(req, res, next) => {

    try {
        
        const token = req.cookies.token
        // console.log("Check 1")
        if(!token) {
            return res.status(401).json({
                message: "Unauthorised access is not allowed!",
                success: false
            })
        }
        // console.log("Check 2")
        
        const decode = await jwt.verify(token, process.env.SECRETKEY)
        // console.log("Check 3")
        if(!decode) {
            return res.status(401).json({
                message: "Invalid Token!",
                success: false
            })
        }
        // console.log("Check 4")
        
        req.id = decode.userId
        // console.log("Check 5")
        
        next()
        // console.log("Check 6")

    } catch (err) {
        console.log(`Error at isAuthenticated file: ${err}`)
    }
}

export default isAuthenticated