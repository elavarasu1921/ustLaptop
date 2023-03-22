const { default: mongoose } = require("mongoose");
const Employee = require("../database/schema/employee.schema");
const Laptop = require("../database/schema/laptop.schema");

exports.getAllEmployees = async () => {
  const allEmployees = await Employee.aggregate([
    {
      $lookup: {
        from: "laptops",
        localField: "assignedLaptop",
        foreignField: "_id",
        as: "laptop",
      },
    },
    { $project: { assignedLaptop: 0, __v: 0 } },
  ]);
  return allEmployees;
};

exports.getEmployeeByID = async (id) => {
  return await Employee.findById(id);
};

exports.getEmployeeByIDandAddLaptop = async ({ user_id, laptop_id }) => {
  const userID = new mongoose.Types.ObjectId(user_id);
  const laptopID = new mongoose.Types.ObjectId(laptop_id);
  try {
    const empResult = await Employee.findByIdAndUpdate(userID, {
      $set: {
        assignedLaptop: laptopID,
      },
    });
    const laptopResult = await Laptop.findByIdAndUpdate(laptopID, {
      $set: {
        assignedTo: userID,
      },
    });
    return { empResult, laptopResult };
  } catch (err) {
    return false;
  }
};

exports.getEmployeeByIDandClearLaptop = async ({ laptop_id, user_id }) => {
  const userID = new mongoose.Types.ObjectId(user_id);
  const laptopID = new mongoose.Types.ObjectId(laptop_id);
  try {
    const empResult = await Employee.findByIdAndUpdate(userID, {
      $set: {
        assignedLaptop: null,
      },
    });
    const laptopResult = await Laptop.findByIdAndUpdate(laptopID, {
      $set: {
        assignedTo: null,
      },
    });
    return { empResult, laptopResult };
  } catch (err) {
    return false;
  }
};
