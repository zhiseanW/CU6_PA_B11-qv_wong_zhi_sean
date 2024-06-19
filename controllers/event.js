// instruction: import the event model
const Event = require("../models/event");

const getEvents = async (category, title) => {
  // instruction: write the codes to retrieve all events (use `populate()` to get organizer details)
  let filter = {};
  if (category) {
    filter.category = category;
  }
  if (title) {
    filter.title = title;
  }
  const events = await Event.find(filter).populate("organizer");
  return events;
};

const getEvent = async (id) => {
  // instruction: write the codes to retrieve a specific event (use `populate()` to get organizer details)
  const event = await Event.findById(id).populate("organizer");
  return event;
};

const AddNewEvent = async (
  title,
  organizer,
  date,
  location,
  category,
  description,
  attendeeCount
) => {
  // instruction: write the codes to add a new event
  const newEvent = new Event({
    title: title,
    organizer: organizer,
    date: date,
    location: location,
    category: category,
    description: description,
    attendeeCount: attendeeCount,
  });
  await newEvent.save();
  return newEvent;
};

const updateEvent = async (
  id,
  title,
  organizer,
  date,
  location,
  category,
  description,
  attendeeCount
) => {
  // instruction: write the codes to update an event
  const event = await Event.findById(id);
  event.title = title;
  event.organizer = organizer;
  event.date = date;
  event.location = location;
  event.category = category;
  event.description = description;
  event.attendeeCount = attendeeCount;
  await event.save();
  return event;
};

const deleteEvent = async (id) => {
  // instruction: Write the codes to delete an event
  const event = await Event.findByIdAndDelete(id);
  return event;
};

module.exports = {
  getEvents,
  getEvent,
  AddNewEvent,
  updateEvent,
  deleteEvent,
};
