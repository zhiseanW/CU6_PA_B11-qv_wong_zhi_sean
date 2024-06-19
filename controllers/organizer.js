// instruction: import the organizer model
const Organizer = require("../models/organizer");

const getOrganizers = async (name) => {
  // instruction: Write the codes to retrieve all organizers
  let filter = {};
  if (name) {
    filter.name = name;
  }
  const organizers = await Organizer.find(filter);
  return organizers;
};

const getOrganizer = async (id) => {
  // instruction: write the codes to retrieve a specific organizer
  const organizer = await Organizer.findById(id);
  return organizer;
};

const AddNewOrganizer = async (name, bio, contact, eventsOrganized) => {
  // instruction: write the codes to add an organizer
  const newOrganizer = await Organizer({
    name: name,
    bio: bio,
    contact: contact,
    eventsOrganized: eventsOrganized,
  });
  await newOrganizer.save();
  return newOrganizer;
};

const updateOrganizer = async (id, name, bio, contact, eventsOrganized) => {
  // instruction: write the codes to update an organizer
  const organizer = await Organizer.findById(id);
  organizer.name = name;
  organizer.bio = bio;
  organizer.contact = contact;
  organizer.eventsOrganized = eventsOrganized;
  await organizer.save();
  return organizer;
};

const deleteOrganizer = async (id) => {
  // instruction: write the codes to delete an organizer
  const organizer = await Organizer.findByIdAndDelete(id);
  return organizer;
};

module.exports = {
  getOrganizers,
  getOrganizer,
  AddNewOrganizer,
  updateOrganizer,
  deleteOrganizer,
};
