const { errorHandler } = require("./errorHandling");
exports.wrapAsync = fn => {
    return (req, res, next) => {
        return fn(req, res)
            .then(result => {
                if (result.render === "invoice") {
                    res.render("invoice", result.data);
                } else {
                    res.status(200).send(result);
                }
            })
            .catch(err => {
                console.error(err);
                const response = errorHandler(err);
                res.status(response.status).send(response);
            });
    };
};