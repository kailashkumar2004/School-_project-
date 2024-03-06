const mongoose = require("mongoose");
const express = require("express");
const { Teacher } = require("../teacher.model/teacher.model");
const { secretKey } = require("../../../../config");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { teacherauthincate} = require("../../../midleware/teachermidleare");

const createTeacher = async (body) => {
    const existingUser = await Teacher.findOne({ email:body.email });
    console.log("existingUser-------------------->>", existingUser);
    if (existingUser) {
        throw "email allready register"
    };
    const newTeacher = new Teacher(body);
    console.log("newTeacher-------------------->>", newTeacher);
    if (!newTeacher) {
        throw "newTeacher data not found"
    };
    const response = await newTeacher.save();

    return {
        msg: "createTeacher data sucessfully",
        result:response
    }
}
const register = async (body) => {
    const existingUser = await Teacher.findOne({ email: body.email });
    console.log("existingUser------------------->>", existingUser);
    if (existingUser) {
        throw "email allready register"
    };
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(body.password, saltRounds);
    body.password = hashedPassword;

    const saveTeacher = new Teacher(body);
    const response = await saveTeacher.save();

    return {
        msg: "regiter data sucessfully",
        result: response
    };
};
const login = async (body) => {
    const existingUser = await Teacher.findOne({ email: body.email }).populate("class");
    console.log("existingUser------------------>>", existingUser);
    if (!existingUser) {
        throw "invalited email find"
    };
    const isPasswordMath = await bcrypt.compare(body.password, existingUser.password);
    console.log("isPasswordMath--------------->>", isPasswordMath);
    if (!isPasswordMath) {
        throw "invalited password find"
    };
    const token = jwt.sign({ id: existingUser._id.toString() }, secretKey);
    
    return {
        msg: "login sucessfully",
        user: existingUser,
        token
    };
};
const getTeacherByToken = async (user) => {
    const getdata = await Teacher.findOne({ _id: user._id }).populate("class");
    console.log("getdata----------------->>", getdata);
    if (!getdata) {
        throw "getdata not found"
    };
    return {
        msg: "okk sucessfully data recive",
        result: getdata
    };
};
const updateTeacherByToken = async (user, body) => {
    const updateTeacher = await Teacher.findByIdAndUpdate(user, { $set: body }, { new: true }).populate("class");
    console.log("updateTeacher----------------->>", updateTeacher);
    if (!updateTeacher) {
        throw "updateTeacher data not find"
    };
    return {
        msg: "updateTeacher data sucess",
        result: updateTeacher
    };
};
const deleteTeacherByToken = async (user) => {
    const deleteTeacher = await Teacher.findByIdAndDelete(user).populate("class");
    console.log("deleteTeacher---------------->>", deleteTeacher);
    if (!deleteTeacher) {
        throw "deleteTeacher data not found"
    };
    return {
        msg: "deleteTeacher data sucessfully",
        result: deleteTeacher
    };
};
const allTeacher = async (query) => {
    const { page = 1 } = query;
    const limit = 10;
    const skip=(page-1)*limit
    const response = await Teacher.find().populate("class").skip(skip).limit(limit).sort({createdAt:-1});
    console.log("response----------------------->>", response);
    if (!response) {
        throw "data is not find"
    };
    return {
        msg: "okk sucess",
        count: response.length,
        result: response
    };
};
const getTeacherById = async (id) => {
    try {
        const getdata = await Teacher.findById(id).populate("class");
        console.log("getdata-------------->>", getdata);
        if (!getdata) throw "invalited data find";

        return {
            msg: "okk sucessfully",
            result: getdata
        };
    } catch (error) {
        console.log("error----------------->>", error);
        throw "error message"
    };
};
const updateTeacherById = async (body, id) => {
    try {
        const updatedata = await Teacher.findByIdAndUpdate(id, { $set: body }, { new: true }).populate("class");
        console.log("updatedata---------------<<>>", updatedata);
        if (!updatedata) throw "invalited data find";

        return {
            msg: "updatedata sucessfully",
            result: updatedata
        };
    } catch (error) {
        console.log("error----------------->>", error);
        throw "error message"
    };
};
const deleteTeacherById = async (id) => {
    try {
        const deletedata = await Teacher.findByIdAndDelete(id);
        console.log("deletedata--------------->>", deletedata);
        if (!deletedata) throw "invalited data find";

        return {
            msg: "deletedata sucessfully",
            result: deletedata
        };
    } catch (error) {
        console.log("error--------------------->>", error);
        throw "error message"
    };
};
const getTeacherByname = async (body) => {
    try {
        const getdata = await Teacher.findOne({ firstName: body.firstName }).populate("class");
        console.log("getdata-------------->>", getdata);
        if (!getdata) throw "invalited data find";

        return {
            msg: "okk sucessfully data",
            result: getdata
        };
    } catch (error) {
        console.log("error--------------------->>", error);
        throw "error message"
    };
};
const searchTecherByuserName = async (body) => {
    try {
        const searchdata = await Teacher.find({ firstName: body.firstName }).populate("class");
        console.log("searchdata------------->>", searchdata);
        if (!searchdata) throw "invalited data find";

        return {
            msg: "searchdata sucessfully",
            count: searchdata.length,
            result: searchdata
        };
    } catch (error) {
        console.log("error------------------->>", error);
        throw "error message"
    };
};
const searchdata = async (body) => {
    try {
        const searchdata = await Teacher.find(body).populate("class");
        console.log("searchdata------------------>>", searchdata);
        if (!searchdata) {
            throw "searchdata not found"
        };
        return {
            msg: "searchdata okk sucess",
            count: searchdata.length,
            result: searchdata
        };
    } catch (error) {
        console.log("error----------------------->>", error);
        throw "New Error message"
    };
};
const searchTokenWithquery = async (user, query) => {
    try {
        const searchdata = await Teacher.find(query).populate("class");
        console.log("searchdata--------------------->>", searchdata);
        if (!searchdata) throw "invalited data find";

        return {
            msg: "okk sucess",
            count: searchdata.length,
            result: searchdata
        };
    } catch (error) {
        console.log("error------------------------->>", error);
        throw "error message"
    };
};
const searchWithquery = async (query) => {
    try {
        const searchdata = await Teacher.find(query).populate("class");
        console.log("searchdata-------------->>", searchdata);
        if (!searchdata) throw "invalited data find";

        return {
            msg: "okk sucess",
            count: searchdata.length,
            result: searchdata
        };
    } catch (error) {
        console.log("error-------------------->>", error);
        throw "error message"
    };
};
const resetPassword = async (user, body) => {
    const { email, oldPassword, newPassword, confirmPasswor } = body;
    if (!email && !oldPassword && !newPassword && !confirmPasswor) {
        throw "miss matching field"
    };
    const users = await Teacher.findOne({ email });
    console.log("users---------------->>", users);
    if (!users) {
        throw "users data not find"
    };
    const isPasswordMath = await bcrypt.compare(oldPassword, users.password);
    console.log("isPasswordMath--------------->>", isPasswordMath);
    if (!isPasswordMath) {
        throw "invalited password find"
    };
    if (newPassword !== confirmPasswor) {
        throw "miss match password find"
    };
    users.password = await bcrypt.hash(newPassword, 10);
    await users.save();

    return {
        msg: "resetPassword sucessfully",
        result: users
    };
};
const updatePassword = async (body, id) => {
    try {
        const { newPassword } = body;
        const updatePassword = await Teacher.findById(id).populate("class");
        console.log("updatePassword-------------------->>", updatePassword);
        if (!updatePassword) {
            throw "updatePassword not found"
        };
        const saltRounds = 13;
        const hashedPassword = await bcrypt.hash(body.newPassword, saltRounds);
        updatePassword.password = hashedPassword;

        await updatePassword.save();

        return {
            msg: "updatePassword sucessfully",
            result: updatePassword
        };
    } catch (error) {
        console.log("error---------------------->>", error);
        throw "New Error message"
    };
};
module.exports = {
    createTeacher, register, login, getTeacherByToken, updateTeacherByToken,
    deleteTeacherByToken, allTeacher, getTeacherById, updateTeacherById,
    deleteTeacherById, getTeacherByname, searchTecherByuserName, searchdata,
    searchTokenWithquery,searchWithquery,resetPassword,updatePassword
    
    };