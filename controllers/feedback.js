// instruction: import the feedback model
const Feedback = require("../models/feedback");

const getFeedbacksByEvent = async (eventId) => {
  // instruction: write the codes to retrieve all feedbacks by eventId
  const feedbacks = await Feedback.find(eventId);
  return feedbacks;
};

const AddNewFeedback = async (event, attendeeName, comment) => {
  // instruction: write the codes to add new feedback for an event
  const newFeedBack = await Feedback({
    event: event,
    attendeeName: attendeeName,
    comment: comment,
  });
  await newFeedBack.save();
  return newFeedBack;
};

module.exports = {
  getFeedbacksByEvent,
  AddNewFeedback,
};
