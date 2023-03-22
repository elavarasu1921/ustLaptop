const { Schema, default: mongoose } = require("mongoose");

const laptopSchema = new Schema({
  modelName: {
    type: String,
    required: true,
  },
  campusName: {
    type: String,
    required: true,
  },
  laptopID: {
    type: String,
    required: true,
  },
  assignedTo: {
    type: Schema.Types.ObjectId,
    ref: "employer",
    require: true,
  },
});

const Laptop = mongoose.model("laptop", laptopSchema);

module.exports = Laptop;
