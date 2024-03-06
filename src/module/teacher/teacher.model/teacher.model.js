const mongoose = require("mongoose");
const { scretKey } = require("../../../../config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const teacherSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String
    },
    phoneNu: {
        type: Number
    },
    joinDate: {
        type: Date
    },
    expreance: {
        type: Number
    },
    profileImage: {
        type: String
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class"
    }
}, {
    timestamps: true,
    versionKey: false
});
teacherSchema.statics.findByToken = async function (token) {
    try {
        const decodedtoken = jwt.verify(token, scretKey);
        if (!decodedtoken) throw "invalited data find";
        const user = await this.findByToken(decodedtoken.id);
        console.log("user---------------->>", user);
        if (!user) throw "user data not find";
        return user();
    } catch (error) {
        console.log("error------------------>>", error);
        throw "error message"
    };
};
teacherSchema.methods.comparePassword = async function (interedPassword) {
    return bcrypt.compare(interedPassword, this.password)
};
const Teacher = mongoose.model("Teacher", teacherSchema);
module.exports = { Teacher };