import mongoose, { Schema, Document } from 'mongoose';

interface userInterface {
    firstName?: string;
    lastName? :string;
    type?: string;
}

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'Please tell us your name!'],
    },
    lastName: {
      type: String,
      required: [true, 'Please tell us your name!'],
    },
    type: {
        type: String,
        enum: ['Regular', 'Occasional'],
        default: 'Regular'
    }
});

interface userDoc extends Document, userInterface {}

const User = mongoose.model<userDoc>('User', userSchema);

export { User, userInterface, userDoc };
