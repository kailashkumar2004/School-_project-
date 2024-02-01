const mongoose = require("mongoose");
const express = require("express");
const { Event } = require("../event.model/event.model");

const addEvent = async (body) => {
    try {
        const data = new Event(body);
        console.log("data---------------->>", data);
        if (!data) throw "user data not find";
        const savedata = await data.save();

        return {
            msg: "added data sucessfully",
            result: savedata
        };

    } catch (error) {
        console.log("error-------------------->>", error);
        throw "error message"
    }
};
const getEvent = async () => {
    try {
        const response = await Event.find().populate("class");
        console.log("response-------------------->", response);
        if (!response) throw "invalited data find";

        return {
            msg: 'okk sucessfully data',
            count: response.length,
            result: response
        };
    } catch (error) {
        console.log("error---------------------->>", error);
        throw "error message"
    };
};
const getEventById = async (id) => {
    try {
        const getdata = await Event.findById(id).populate("class");
        console.log("getdata-------------------->>", getdata);
        if (!getdata) throw "invalited data find";

        return {
            msg: "okk sucessfully data",
            result: getdata
        };
    } catch (error) {
        console.log("error------------------------>>", error);
        throw "error message"
    };
};
const updateEventById = async (body, id) => {
    try {
        const updatedata = await Event.findByIdAndUpdate(id, { $set: body }, { new: true }).populate("class");
        console.log("updatedata------------------>>", updatedata);
        if (!updatedata) throw "invalited data find";

        return {
            msg: "updatedata sucessfully",
            result: updatedata
        };
    } catch (error) {
        console.log("error----------------------->>", error);
        throw "error message"
    };
};
const deleteEventById = async (id) => {
    try {
        const deleteEvent = await Event.findByIdAndDelete(id);
        console.log("deleteEvent-------------->>", deleteEvent);
        if (!deleteEvent) throw "invalited data find";

        return {
            msg: "delete data sucessfully",
            result: deleteEvent
        };
    } catch (error) {
        console.log("error---------------------->>", error);
        throw "error message"
    };
};
const searchWithname = async (body) => {
    try {
        const searchdata = await Event.findOne({ eventName: body.eventName }).populate("class");
        console.log("searchdata-------------<<", searchdata);
        if (!searchdata) throw "invalited data find";

        return {
            msg: "okk sucess data",
            result: searchdata
        };
    } catch (error) {
        console.log("error------------------------>>", error);
        throw "error message"
    };
};
const searchWitheventName = async (body) => {
    try {
        const searchdata = await Event.find({ eventName: body.eventName }).populate("class");
        console.log("searchdata------------<<", searchdata);
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
const searchdata = async (body) => {
    try {
        const searchdata = await Event.find(body).populate("class");
        console.log("searchdata=================>>", searchdata);
        if (!searchdata) throw "invalited data find";

        return {
            msg: "okk sucess data",
            count: searchdata.length,
            result: searchdata
        };
    } catch (error) {
        console.log("error---------------->>", error);
        throw "error message"
    };
};
const searchdataWithquery = async (query) => {
    try {
        const searchdata = await Event.find(query).populate("class");
        console.log("searchdata------------------>>", searchdata);
        if (!searchdata) throw "invalited data find";

        return {
            msg: "okk sucess data",
            count: searchdata.length,
            result: searchdata
        };
    } catch (error) {
        console.log("error----------------->>", error);
        throw "error message"
    }
}
const upcomingEvents = async () => {
    try {
        const currentDate = new Date();
        console.log("currentDate------------------>>", currentDate);
        const upcomingdate = await Event.find({ assignDate: { $gt: currentDate } }).populate("class");
        console.log("upcomingdate----------------->>", upcomingdate);
        if (upcomingdate > currentDate) throw "No upcoming events found";

        return {
            msg: "upcomingdate sucessfully data",
            count: upcomingdate.length,
            result: upcomingdate
        };
    } catch (error) {
        console.log("error----------------------->>", error);
        throw "error message"
    };
};
const pastEvents = async () => {
    try {
        const currentDate = new Date();
        console.log("currentDate----------------------->", currentDate);
        const pastdate = await Event.find({ assignDate: { $lt: currentDate } }).populate("class");
        console.log("pastdate--------------------<<>>", pastdate);
        if (currentDate<pastdate)  throw "No past events found";
        return {
            msg: "pastEvents successfully",
            count: pastdate.length,
            result: pastdate
        };
    } catch (error) {
        console.log("error---------------------->>", error);
        throw "Error message";
    }
};

module.exports = {
    addEvent, getEvent, getEventById, updateEventById,
    deleteEventById, searchWithname, searchWitheventName,
    searchdata, searchdataWithquery, upcomingEvents,pastEvents 
}