import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";

interface mealInterface {
  members?: [mongoose.Schema.Types.ObjectId];
  type?: string;
  date?: Date;
}

const mealSchema = new Schema({
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User',
    required: [true, "Please Provide Members"],
  }],
  type: {
    type: String,
    enum: ["Lunch", "Other"],
    default: "Lunch",
  },
  date: { type: Date, default: Date.now },
});

interface userDoc extends Document, mealInterface {}

const User = mongoose.model<userDoc>("Meal", mealSchema);

export { User, mealInterface, userDoc };
