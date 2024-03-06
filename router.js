const student = require("./src/module/student/student.router/student.router");
const classRouter = require("./src/module/class/class.router/class.router")
const school = require("./src/module/school/school.router/school.router");
const teacher = require("./src/module/teacher/teacher.router/teacher.router");
const notes = require("./src/module/notes/notes.router/notes.router");
const event = require("./src/module/event/event.router/event.router");

module.exports = [
    {
        path: "/api/student",
        handler:student 
    },
    {
        path: "/api/classRouter",
        handler:classRouter
    },
    {
        path: "/api/school",
        handler:school
    },
    {
        path: "/api/teacher",
        handler:teacher
    },
    {
        path: "/api/notes",
        handler:notes
    },
    {
        path: "/api/event",
        handler:event
    }
]