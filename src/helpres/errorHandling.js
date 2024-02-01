exports.errorHandler = (error, status = 400) => {
    let errorMsg, msg, originalError;

    if (typeof error !== "object") {
        msg = error;
    } else {
        originalError = error.message;

        if (originalError.includes("email_1 dup")) {
            msg = "Duplicate email error message";
        } else if (originalError.includes("phone_1 dup")) {
            msg = "Duplicate phone error message";
        } else if (originalError.includes("valid email")) {
            msg = "Invalid email error message";
        } else if (originalError.includes("password is required")) {
            msg = "Password required error message";
        } else if (originalError.includes("not a valid email")) {
            msg = "Invalid email format error message";
        } else if (originalError.includes("undefined") || originalError.includes("null")) {
            msg = "Undefined or null error message";
        } else if (error.code === 11000) {
            msg = "Duplicate key error message";
        }
    }

    errorMsg = {
        error: originalError || msg || "Server error",
        body: msg || "Server error",
        status: status
    };
    if (originalError) {
        console.error("Original Error:", originalError);
    }

    return errorMsg;
};