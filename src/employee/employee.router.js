const express = require("express");
const fromController = require("./employee.controller");
const fromUtils = require("./employee.utils");

const router = express.Router();

router.get("/all", fromController.getAllEmployees);
router.post(
  "/assign",
  fromUtils.employee_validity,
  fromUtils.laptop_validity,
  fromController.assign_laptop
);
router.post(
  "/unassign",
  fromUtils.employee_ua_validity,
  fromController.unassign_laptop
);

exports.employee_router = router;
