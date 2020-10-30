import mongoose, { Schema, Document } from "mongoose";

interface mealInterface {
  members?: [mongoose.Schema.Types.ObjectId];
  type?: string;
  date?: Date;
}

const mealSchema = new Schema({
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please Provide Members"],
    },
  ],
  type: {
    type: String,
    enum: ["Lunch", "Other"],
    default: "Lunch",
  },
  cost: {
    type: Number,
    required: [true, "Please Provide Cost"],
  },
  payments: [
    {
      paidBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Please Provide Provider"],
      },
      amount: { type: Number, required: [true, "Please Provide Payment Amount"] },
    },
  ],
  date: { type: Date, default: Date.now },
});

interface mealDoc extends Document, mealInterface {}

const Meal = mongoose.model<mealDoc>("Meal", mealSchema);

export { Meal, mealInterface, mealDoc };
