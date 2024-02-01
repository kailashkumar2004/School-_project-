const mongoose = require("mongoose");
const express = require("express");
const { Teacher } = require("../teacher.model/teacher.model");
const { secretKey } = require("../../../../config");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { teacherauthincate} = require("../../../midleware/teachermidleare");

const addTeacher = async (body) => {
    try {
        const data = new Teacher(body);
        console.log("data------------------->>", data);
        if (!data) throw "user data not find";
        const saveTeacher = await data.save();
        console.log("saveTeacher---------------->>", saveTeacher);
        if (!saveTeacher) throw "email allready register";
        return {
            msg: "added data sucessfully",
            result: saveTeacher
        };
    } catch (error) {
        console.log("error-------------------->>", error);
        throw "error message"
    };
};
const register = async (body) => {
    try {
        const existingUser = await Teacher.findOne({ email: body.email });
        console.log("existingUser----------------->>", existingUser);
        if (existingUser) throw "email allready register";

        const saltRounds = 17;
        const hashedPassword = await bcrypt.hash(body.password,saltRounds);
        body.password = hashedPassword;

        const userdata = new Teacher(body);
        const savedata = await userdata.save();

        return {
            msg: "register data sucessfully",
            result: savedata
        };
    } catch (error) {
        console.log("error--------------------->>", error);
        throw "error message"
    };
};
const login = async (body) => {
    try {
        const existingUser = await Teacher.findOne({ email: body.email });
        console.log("existingUser---------------<<>>", existingUser);
        if (!existingUser) throw "invalited email find";

        const isPasswordMath = await bcrypt.compare(body.password, existingUser.password);
        console.log("isPasswordMath------------------->>", isPasswordMath);
        if (!isPasswordMath) throw "invalited password find";

        const token = jwt.sign({ id: existingUser._id.toString() }, secretKey);

        return {
            msg: "login sucessfully",
            user: existingUser,
            token
        };
    } catch (error) {
        console.log("error----------------------->>", error);
        throw "error message"
    };
};
const getTeacherByToken = async (user) => {
    try {
        const getdata = await Teacher.findOne({ _id: user._id }).populate("class");
        console.log("getdata--------------->>", getdata);
        if (!getdata) {
            throw "Invalid data found";
        }
        return {
            msg: "getdata successfully",
            result: getdata
        };
    } catch (error) {
        console.log("error------------------>>", error);
        throw "error message";
    }
};
const updateTeacherByToken = async (body, user) => {
    try {
        const updatedata = await Teacher.findByIdAndUpdate(user, { $set: body }, { new: true }).populate("class");
        console.log("updatedata-------------->>", updatedata);
        if (!updatedata) throw "invalited data find";

        return {
            msg: "updatedata sucessfully",
            result: updatedata
        };
    } catch (error) {
        console.log("error------------------->>", error);
        throw "error message"
    };
};
const deleteTeacherByToken = async (user) => {
    try {
        const deletedata = await Teacher.findByIdAndDelete(user);
        console.log("deletedata----------------->>", deletedata);
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
const getByTeacher = async () => {
    try {
        const response = await Teacher.find().populate("class");
        console.log("response----------------->>", response);
        if (!response) throw "invalited data find";

        return {
            msg: "okk sucessfully data",
            count: response.length,
            result: response
        };
    } catch (error) {
        console.log("error------------------>>", error);
        throw "error message"
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
        console.log("searchdata--------------->>", searchdata);
        if (!searchdata) throw "invalited data find";

        return {
            msg: "okk sucessfully data",
            count: searchdata.length,
            result: searchdata
        };
    } catch (error) {
        console.log("error-------------------->>", error);
        throw "error message"
    };
};
const searchTecherWithquery = async (user, query) => {
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
const searchdataWithquery = async (query) => {
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
module.exports = {
    addTeacher, register, login, getTeacherByToken, updateTeacherByToken,
    deleteTeacherByToken, getByTeacher, getTeacherById, updateTeacherById,
    deleteTeacherById, getTeacherByname, searchTecherByuserName, searchdata,
    searchTecherWithquery,searchdataWithquery
    
    };