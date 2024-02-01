const mongoose = require("mongoose");
const { secretKey } = require("../../../../config");
const jwt = require("jsonwebtoken");
const addresh = new mongoose.Schema({
    city: {
        type: String
    },
    state: {
        type: String
    },
    addreshLine1: {
        type: Number
    },
    addreshLine2: {
        type: Number
    },
    cuntery: {
        type: String
    }
});
const studentSchema = new mongoose.Schema({
    userName: {
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
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Class"
    },
    date: {
        type: Date
    },
    addresh:addresh
}, {
    timestamps: true,
    versionKey: false
});
studentSchema.statics.findByToken = async function (token) {
    try {
        const decodedtoken = jwt.verify(token, secretKey);
        if (!decodedtoken) throw "invalited data find";
        const user = await this.findByToken(decodedtoken.id);
        if (!user) throw "user data not find";
        return user();
    } catch (error) {
        console.log("error------------->>", error);
        throw "error message"
    };
};
studentSchema.methods.comparePassword = async function (interedPassword) {
    return bcrypt.compare(interedPassword, this.password)
};
const Student = mongoose.model("Student", studentSchema);
module.exports = { Student };