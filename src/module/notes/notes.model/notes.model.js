const mongoose = require("mongoose");
const notesSchema = new mongoose.Schema({
    notesName: {
        type: String
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class"
    },
    section: {
        type: String
    }
}, {
    timestamps: true,
    versionKey: false
});
const Notes = mongoose.model("Notes", notesSchema);
module.exports = { Notes };