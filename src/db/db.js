const mongoose = require("mongoose");
class database{
    constructor() {
        this.db_connect()
    }
    async db_connect() {
        try {
            this.database = await mongoose.connect("mongodb://127.0.0.1:27017/school", {
                useNewUrlparser: true,
                useUniFiedTopology: true
            });
            console.log("database connect secuessfully");
        } catch (error) {
            console.log("error connect database");
        };
    };
};
module.exports = new database();