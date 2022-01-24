const StudentMongo = require("./studentMongo")
const StudentFile = require("./studentFile")

let studentDao

switch (process.env.DATABASE) {
    case "file":
        studentDao = new StudentFile()
        break;

    case "mongo":
        studentDao = new StudentMongo()
        break;

    default:
        break;
}


module.exports = {
    studentDao
}