const mongoose = require("mongoose");
const schoolSchema = new mongoose.Schema({
    schoolName: {
        type: String
    },
    schoolEmail: {
        type: String,
        require: true,
        unique: true
    },
    schoolPhoneNu: {
        type: Number
    }
}, {
    timestamps: true,
    versionKey: false
});
const School = mongoose.model("School", schoolSchema);
module.exports = { School };