const { default: mongoose } = require("mongoose");
const fromService = require("./employee.service");
const ApiError = require("../error/base.error");

exports.getAllEmployees = async (req, res, next) => {
  let allEmployees = await fromService.getAllEmployees();
  res.status(200).json({ error: false, data: allEmployees });
};

exports.assign_laptop = async (req, res, next) => {
  const { laptop_id, user_id } = req.body;
  const result = await fromService.getEmployeeByIDandAddLaptop({
    laptop_id,
    user_id,
  });
  if (!result) {
    next(ApiError.badRequest("Not able to assign laptop"));
    return;
  }
  res.status(200).json({ error: false, data: "Laptop Successfully assigned" });
};

exports.unassign_laptop = async (req, res, next) => {
  const { user_id, laptop_id } = req.body;
  const result = await fromService.getEmployeeByIDandClearLaptop({
    laptop_id,
    user_id,
  });
  if (!result) {
    next(ApiError.badRequest("Not able to unassign laptop"));
    return;
  }
  res
    .status(200)
    .json({ error: false, data: "Laptop Successfully unassigned" });
};
