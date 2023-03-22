const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const { employee_router } = require("./employee/employee.router");
const { laptop_router } = require("./laptop/laptop.router");
const Employee = require("./database/schema/employee.schema");
const Laptop = require("./database/schema/laptop.schema");
const { errorHandler } = require("./error/error.handler");
require("./database/config/seeder");

const app = express();

app.use(cors());
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/employee", employee_router);
app.use("/laptop", laptop_router);

app.use(errorHandler);

// (async () => {
//   let asd = await Laptop.aggregate([
//     {
//       $lookup: {
//         from: "employees",
//         localField: "assignedTo",
//         foreignField: "_id",
//         as: "assigned_to",
//       },
//     },
//     { $project: { __v: 0 } },
//   ]);
//   console.log(asd);
// })();

module.exports = app;
