import { model, Schema } from 'mongoose';

const pollSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
    },
    // Add other fields
  },
  {
    timestamps: true,
  }
);

export const Poll = model('Poll', pollSchema);
