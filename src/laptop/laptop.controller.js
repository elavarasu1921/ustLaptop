const { getAllLaptops, getLaptopByLocation } = require("./laptop.service");

exports.all_laptops = async (req, res, next) => {
  const allLaptops = await getAllLaptops();
  res.status(200).json({
    error: false,
    data: allLaptops,
  });
};
exports.laptops_by_location = async (req, res, next) => {
  const laptops = await getLaptopByLocation("TRV");
  console.log(laptops);
  res.status(200).json({
    error: false,
    data: laptops,
  });
};
