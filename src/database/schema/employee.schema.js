const { Schema, default: mongoose } = require("mongoose");

const EmployeeSchema = new Schema({
  employeeName: {
    type: String,
    required: true,
  },
  employeeID: {
    type: String,
    required: true,
  },
  campusName: {
    type: String,
    required: true,
  },
  assignedLaptop: {
    type: Schema.Types.ObjectId,
    ref: "laptop",
    require: true,
  },
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
