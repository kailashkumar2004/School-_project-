const mongoose = require("mongoose");
const { Student } = require("../module/student/student.model/student.model");
const { secretKey } = require("../../config");
const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
    try {
        const authHeader = req.header("Authorization");

        if (!authHeader || !authHeader.startsWith("Bearer")) {
            throw "New Authorization message";
        }

        const token = authHeader.substring("Bearer".length).trim();
        console.log("token---------------->>", token);

        const decoded = jwt.verify(token, secretKey);
        console.log("decoded=============>>", decoded);

        const userData = await Student.findOne({ _id: decoded.id });
        console.log("userData------------>>", userData);

        if (!userData) {
            throw "User data not found";
        }

        req.user = userData;
        next();
    } catch (error) {
        console.log("error--------------->>", error);
        res.status(500).json({
            msg: "Internal server error",
            error: error.message || "Unknown error",
        });
    }
};

function errorHandle(error, status) {
    return {
        error: status || 500,
        msg: "Internal server error"
    };
}

module.exports = {
    errorHandle,
    authenticate
};
