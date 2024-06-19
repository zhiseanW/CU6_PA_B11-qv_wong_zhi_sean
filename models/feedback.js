const mongoose = require("mongoose");
const { Schema, model } = mongoose;

/*
    instruction: setup the feedback schema according to the following requirements:
    - event: (ObjectId, ref: 'Event', required)
    - attendeeName: (String, required)
    - comment: (String)
*/

const feedbackSchema = new Schema({
  event: {
    type: Schema.Types.ObjectId,
    ref: "Event",
  },
  attendeeName: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
  },
});

const Feedback = model("Feedback", feedbackSchema);
module.exports = Feedback;
