import jwt from 'jsonwebtoken'

const isAuthenticated = async(req, res, next) => {

    try {
        
        const token = req.cookie.token
        if(!token) {
            return res.status(401).json({
                message: "Unauthorised access is not allowed!",
                success: false
            })
        }
        
        const decode = await jwt.verify(token, process.env.SECRETKEY)
        if(!decode) {
            return res.status(401).json({
                message: "Invalid Token!",
                success: false
            })
        }

        req.id = decode.userId

        next()

    } catch (err) {
        console.log(`Error at isAuthenticated file: ${err}`)
    }
}

export default isAuthenticated