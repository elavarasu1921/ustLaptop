const Employee = require("../schema/employee.schema");
const Laptop = require("../schema/laptop.schema");
const { ObjectId } = require("mongodb");

const laptopData = [
  {
    modelName: "H532LTRV",
    laptopID: "L00101",
    campusName: "TRV",
  },
  {
    modelName: "H533LTRV",
    laptopID: "L00102",
    campusName: "TRV",
  },
  {
    modelName: "H534LTRV",
    laptopID: "L00103",
    campusName: "TRV",
  },
  {
    modelName: "G630KOC",
    laptopID: "L00104",
    campusName: "KOC",
  },
  {
    modelName: "G631KOC",
    laptopID: "L00105",
    campusName: "KOC",
  },
];

let employeeData = [
  {
    employeeName: "Emp1",
    employeeID: "E00101",
    campusName: "TRV",
    assignedLaptop: new ObjectId("64199c68d400807e2e9445f9"),
  },
  {
    employeeName: "Emp2",
    employeeID: "E00102",
    campusName: "KOC",
  },
  {
    employeeName: "Emp3",
    employeeID: "E00103",
    campusName: "TRV",
  },
  {
    employeeName: "Emp4",
    employeeID: "E00104",
    campusName: "KOC",
  },
  {
    employeeName: "Emp5",
    employeeID: "E00105",
    campusName: "TRV",
  },
];

// employeeData.forEach(async (ele) => {
//   await Employee.create(ele);
// });

// laptopData.forEach(async (ele) => {
//   await Laptop.create(ele);
// });
