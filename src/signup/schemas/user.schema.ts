import { Schema } from 'mongoose';

export const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  sessions:[{
    startTime: { type: Date, required: true },
    endTime: { type: Date },
    user: { type: Schema.Types.ObjectId, ref: 'userSchema' }
  }]
});

