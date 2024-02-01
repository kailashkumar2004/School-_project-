const mongoose = require("mongoose");
const { Teacher } = require("../module/teacher/teacher.model/teacher.model");
const { secretKey } = require("../../config");
const jwt = require("jsonwebtoken");
const teacherauthincate = async (req, res, next) => {
    try {
        const authHeader = req.header("Authorization");
        if (!authHeader || !authHeader.startsWith("Bearer")) {
            throw "Invalid Authorization header";
        }

        const token = authHeader.substring("Bearer ".length);
        console.log("token------------------->>", token);
        
        const decoded = jwt.verify(token, secretKey);
        console.log("decoded---------------->>", decoded);
        
        const userData = await Teacher.findOne({ _id:decoded.id });
        console.log("userData-------------->>", userData);
        
        if (!userData) {
            throw "User data not found";
        }
        req.user = userData;
        next();
    } catch (error) {
        console.log("error------------------->>", error);
        res.status(500).json({
            msg: "Internal server error",
            error: errorHandle(error, 500)
        });
    }
};

function errorHandle(error, status) {
    return {
        error: status || 500,
        msg: 'internal server error'
    };
};
module.exports = {
    errorHandle,teacherauthincate
}