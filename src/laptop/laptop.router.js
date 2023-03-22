const express = require("express");
const { all_laptops, laptops_by_location } = require("./laptop.controller");

const router = express.Router();

router.get("/all", all_laptops);
router.get("/location", laptops_by_location);

exports.laptop_router = router;
