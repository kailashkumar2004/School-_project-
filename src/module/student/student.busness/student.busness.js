const mongoose = require("mongoose");
const express = require("express");
const { Student } = require("../student.model/student.model");
const { secretKey } = require("../../../../config");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { authenticate } = require("../../../midleware/authmidleware");



const addStudent = async (body) => {
    try {
        const data = new Student(body);
        console.log("data------------------>>", data);
        if (!data) throw "user data not find";
        const savedata = await data.save();
        console.log("savedata--------------->>", savedata);
        if (!savedata) throw "email allready register";

        return {
            msg: "added data sucessfully",
            result: savedata
        };
    } catch (error) {
        console.log("error--------------------->>", error);
        throw "error message"
    };
};
const register = async (body) => {
    try {
        const existingUser = await Student.findOne({ email: body.email });
        console.log("existingUser-------------->>", existingUser);
        if (existingUser) throw "email allready register";

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(body.password, saltRounds);
        body.password = hashedPassword;

        const userdata = new Student(body);
        const saveStudent = await userdata.save();

        return {
            msg: "register data sucessfully",
            result: saveStudent
        };
    } catch (error) {
        console.log("erro------------------>>", error);
        throw "error message"
    };
};
const login = async (body) => {
    try {
        const existingUser = await Student.findOne({ email: body.email });
        console.log("existingUser------------>>", existingUser);
        if (!existingUser) throw "invalited email find"


        const isPasswordMath = await bcrypt.compare(body.password, existingUser.password);
        console.log("isPasswordMath--------------->>", isPasswordMath);
        if (!isPasswordMath) throw "invalited password find"

        const token = jwt.sign({ id: existingUser._id.toString() }, secretKey);

        return {
            msg: "login sucessfully",
            user: existingUser,
            token
        };
    } catch (error) {
        console.log("error------------------------>>", error);
        throw "error message"
    };
};
const getStudentByToken = async (user) => {
    try {
        const getdata = await Student.findOne({ _id: user._id }).populate("class");
        console.log("getdata----------------<<", getdata);
        if (!getdata) throw "invalited data find";

        return {
            msg: "getdata sucessfully",
            result: getdata
        };
    } catch (error) {
        console.log("error----------------->>", error);
        throw "error message"
    };
};
const updateStudentByToken = async (body, user) => {
    try {
        const updatedata = await Student.findByIdAndUpdate(user, { $set: body }, { new: true }).populate("class");
        console.log("updatedata==============>>", updatedata);
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
const deleteStudentByToken = async (user) => {
    try {
        const deletedata = await Student.findByIdAndDelete(user);
        console.log("deletedata--------------->>", deletedata);
        if (!deletedata) throw "invalited data find";

        return {
            msg: "deletedata sucessfully",
            result: deletedata
        };
    } catch (error) {
        console.log("error----------------->>", error);
        throw "error message"
    };
};
const getdata = async (query) => {
    try {
        const { page = 1 } = query;
        const limit = 10;
        const skip=(page-1)*limit
        const response = await Student.find().populate("class").skip(skip).limit(limit);
        console.log("response----------------->>", response);
        if (!response) throw "invalited data find";
        return {
            msg: "okk sucessfully data ",
            count: response.length,
            result: response
        };
    } catch (error) {
        console.log("error-------------------->>", error);
        throw "error message"
    };
};
const getStudentById = async (id) => {
    try {
        const getdata = await Student.findById(id).populate("class");
        console.log("getdata----------------->>", getdata);
        if (!getdata) throw "invalited data find";

        return {
            msg: "okk sucessfully data",
            result: getdata
        };
    } catch (error) {
        console.log("error------------------>>", error);
        throw "error message"
    };
};
const updateStudentById = async (body, id) => {
    try {
        const updatedata = await Student.findByIdAndUpdate(id, { $set: body }, { new: true }).populate("class");
        console.log("updatedata----------------->>", updatedata);
        if (!updatedata) throw "invalited data find";

        return {
            msg: "updatedata sucessfully",
            result: updatedata
        };
    } catch (error) {
        console.log("error--------------------->>", error);
        throw "error message"
    };
};
const deleteStudentById = async (id) => {
    try {
        const deletedata = await Student.findByIdAndDelete(id);
        console.log("deletedata------------->>", deletedata);
        if (!deletedata) throw "invalited data find";

        return {
            msg: "deletedata sucessfully",
            result: deletedata
        };
    } catch (error) {
        console.log("error------------------>>", error);
        throw "error message"
    };
};
const searchWithname = async (body) => {
    try {
        const searchdata = await Student.findOne({ userName: body.userName }).populate("class");
        console.log("searchdata--------------->>", searchdata);
        if (!searchdata) throw "invalited data find";

        return {
            msg: "okk sucessfully data",
            result: searchdata
        };
    } catch (error) {
        console.log("error================>>", error);
        throw "error message"
    };
};
const searchWithuserName = async (body) => {
    try {
        const searchdata = await Student.find({ userName: body.userName }).populate("class");
        console.log("searchdata---------------->>", searchdata);
        if (!searchdata) throw "invalited data find";

        return {
            msg: "okk sucess data",
            count: searchdata.length,
            result: searchdata
        };
    } catch (error) {
        console.log("error-------------------->>", error);
        throw "error message"
    };
};
const searchdata = async (body) => {
    try {
        const searchdata = await Student.find(body).populate("class");
        console.log("searchdata----------------->>", searchdata);
        if (!searchdata) throw "invalited data find";

        return {
            msg: "okk sucessfully data",
            count: searchdata.length,
            result: searchdata
        };
    } catch (error) {
        console.log("error------------------>>", error);
        throw "error message"
    };
};
const searchdataTokenWithuery = async (user, query) => {
    try {
        const searchdata = await Student.find(query).populate("class");
        console.log("searchdata-------------->>", searchdata);
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
const searchdataWithquery = async (query) => {
    try {
        const searchdata = await Student.find(query).populate("class");
        console.log("searchdata------------------->>", searchdata);
        if (!searchdata) throw "invalited data find";

        return {
            msg: "okk sucessfully data",
            count: searchdata.length,
            result: searchdata
        };
    } catch (error) {
        console.log("error------------------->>", error);
        throw "error message"
    };
};

const searchWithFilters = async (body) => {
    try {
      const query = {};
  
      if (body.country && Array.isArray(body.country) && body.country.length > 0) {
        query["addresh.cuntery"] = { $in: body.country };
      }
      if (body.state && Array.isArray(body.state) && body.state.length > 0) {
        query["addresh.state"] = { $in: body.state };
      }
      if (body.city && Array.isArray(body.city) && body.city.length > 0) {
        query["addresh.city"] = { $in: body.city };
      }
      if (body.firstName && Array.isArray(body.firstName) && body.firstName.length > 0) {
        query["firstName"] = { $in: body.firstName };
      }
      if (body.lastName && Array.isArray(body.lastName) && body.lastName.length > 0) {
        query["lastName"] = { $in: body.lastName };
      }
      if (body.email && Array.isArray(body.email) && body.email.length > 0) {
        query["email"] = { $in: body.email };
      }
      if (body.password && Array.isArray(body.password) && body.password.length > 0) {
        query["password"] = { $in: body.password };
      }
  
      const searchResults = await Student.find(query).populate("class");
  
      if (!searchResults || searchResults.length === 0) {
        throw "No matching data found";
      }
  
      return {
        msg: "Successfully filtered data",
        count: searchResults.length,
        result: searchResults,
      };
    } catch (error) {
      console.error("Error:", error);
      throw "Error retrieving data";
    }
  };
  
module.exports = {
    addStudent, register, login, getStudentByToken, updateStudentByToken,
    deleteStudentByToken, getdata, getStudentById, updateStudentById, deleteStudentById
    , searchWithname, searchWithuserName, searchdata, searchdataTokenWithuery, searchdataWithquery,
    searchWithFilters};