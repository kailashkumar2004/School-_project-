const mongoose = require("mongoose");
const express = require("express");
const { Event } = require("../event.model/event.model");

const createEvent = async (body) => {
    const newEvent = new Event(body);
    console.log("newEvent------------------>>", newEvent);
    if (!newEvent) {
        throw "newEvent data not found"
    };
    const response = await newEvent.save();

    return {
        msg: "create Event sucess",
        result: response
    };
};
const allEvent = async (query) => {
    try {
        const { page = 1 } = query;
        const limit = 10;
        const skip=(page-1)*limit
        const response = await Event.find().populate("class").skip(skip).limit(limit).sort({createdAt:-1});
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
    const getEvent = await Event.findById(id).populate("class");
    console.log("getEvent---------------->>", getEvent);
    if (!getEvent) {
        throw "getEvent data not find"
    };
    return {
        msg: "okk sucessfully getEvent",
        result: getEvent
    };
};
const updateEventById = async (body, id) => {
    try {
        const updateEvent = await Event.findByIdAndUpdate(id, { $set: body }, { new: true }).populate("class");
        console.log("updateEvent---------------->>", updateEvent);
        if (!updateEvent) {
            throw "updateEvent data is not find"
        };
        return {
            msg: "update Event data sucess",
            result: updateEvent
        };
    } catch (error) {
        console.log("error---------------------------->>", error);
        throw "New Error message"
    };
};
const deleteEventById = async (id) => {
    const deleteEvents = await Event.findByIdAndDelete(id).populate("class");
    console.log("deleteEvents----------------->>", deleteEvents);
    if (!deleteEvents) {
        throw "deleteEvents data not find"
    };
    return {
        msg: "deleteEvents data sucess",
        result: deleteEvents
    };
};
const searchEventsName = async (body) => {
    const searchEvents = await Event.findOne({ eventName: body.eventName }).populate("class");
    console.log("searchEvents----------------->>", searchEvents);
    if (!searchEvents) {
        throw "searchEvents data not find"
    };
    return {
        msg: "searchEvents data sucess",
        result: searchEvents
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
    createEvent, allEvent, getEventById, updateEventById,
    deleteEventById, searchEventsName, searchWitheventName,
    searchdata, searchdataWithquery, upcomingEvents,pastEvents 
}