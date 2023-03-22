const Laptop = require("../database/schema/laptop.schema");

exports.getAllLaptops = async () => {
  return await Laptop.aggregate([
    {
      $lookup: {
        from: "employees",
        localField: "assignedTo",
        foreignField: "_id",
        as: "assigned_to",
      },
    },
    { $project: { assignedTo: 0, __v: 0 } },
  ]);
};

exports.getLaptopByID = async (id) => {
  return await Laptop.findById(id);
};

exports.getLaptopByLocation = async (campusName) => {
  return await Laptop.find({ campusName });
};
