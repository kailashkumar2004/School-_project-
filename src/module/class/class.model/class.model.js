const mongoose = require("mongoose");
const classSchema = new mongoose.Schema({
    class: {
        type: Number
    },
    rollNu: {
        type: Number
    },
    roomNu: {
        type: Number
    },
    secation: {
        type: String
    },
    date: {
        type: Date
    }
}, {
    timestamps: true,
    versionKey: false
});
const Class = mongoose.model("Class", classSchema);
module.exports = { Class };