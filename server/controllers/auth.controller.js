const home = async (req, res) => {
    try {
        return res.status(200).json({msg: "From auth router"})
    } catch (err) {
        console.log("backend -> Error at home route")
    }
}

module.exports = {
    home
}