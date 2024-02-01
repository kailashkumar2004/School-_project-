const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({
    eventName: {
        type: String
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class"
    },
    assignDate: {
        type: Date
    },
    lastDate: {
        type: Date
    }
}, {
    timestamps: true,
    versionKey: false
});
const Event = mongoose.model("Event", eventSchema);
module.exports = { Event };