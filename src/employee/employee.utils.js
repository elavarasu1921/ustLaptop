const mongoose = require("mongoose");
const { getLaptopByID } = require("../laptop/laptop.service");
const { getEmployeeByID } = require("./employee.service");
const ApiError = require("../error/base.error");

exports.employee_validity = async (req, res, next) => {
  const { user_id, laptop_id } = req.body;
  if (!laptop_id || !user_id) {
    next(ApiError.badRequest("Insufficient Data"));
    return;
  }
  const userID = new mongoose.Types.ObjectId(user_id);
  const employee = await getEmployeeByID(userID);
  const { campusName, assignedLaptop } = employee;
  if (assignedLaptop) {
    next(ApiError.badRequest("This Employee is already assigned a laptop"));
    return;
  }
  req.body.userCampusName = campusName;
  next();
};

exports.laptop_validity = async (req, res, next) => {
  const { laptop_id, userCampusName } = req.body;
  const laptopID = new mongoose.Types.ObjectId(laptop_id);
  const laptop = await getLaptopByID(laptopID);
  const { campusName, assignedTo } = laptop;
  if (assignedTo) {
    next(
      ApiError.badRequest("This Laptop is already assigned to another employee")
    );
    return;
  }
  if (campusName !== userCampusName) {
    next(ApiError.badRequest("Laptop not available in same location"));
    return;
  }
  next();
};

exports.employee_ua_validity = async (req, res, next) => {
  const { user_id, laptop_id } = req.body;
  if (!laptop_id || !user_id) {
    next(ApiError.badRequest("Insufficient Data"));
    return;
  }
  const userID = new mongoose.Types.ObjectId(user_id);
  const employee = await getEmployeeByID(userID);
  const { assignedLaptop } = employee;
  if (!assignedLaptop) {
    next(ApiError.badRequest("Employee has no laptops assigned"));
    return;
  }
  next();
};
