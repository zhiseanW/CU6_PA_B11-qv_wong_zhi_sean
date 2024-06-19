const express = require("express");
const router = express.Router();

// instruction: import all the necessary functions from controllers/event.js
const {
  getEvent,
  getEvents,
  AddNewEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/event");

// instruction: import all the necessary functions from controllers/feedback.js
const {
  getFeedbacksByEvent,
  AddNewFeedback,
} = require("../controllers/feedback");

// instruction: `GET /events`: List all events
router.get("/", async (req, res) => {
  try {
    const events = await getEvents(req.query.category, req.query.title);
    res.status(200).send(events);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// instruction: `GET /events/:id`: Get a specific event by its id
router.get("/:id", async (req, res) => {
  try {
    const event = await getEvent(req.params.id);
    res.status(200).send(event);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// instruction: `POST /events`: Add a new event
router.post("/", async (req, res) => {
  try {
    const title = req.body.title;
    const organizer = req.body.organizer;
    const date = req.body.date;
    const location = req.body.location;
    const category = req.body.category;
    const description = req.body.description;
    const attendeeCount = req.body.attendeeCount;
    const newEvent = await AddNewEvent(
      title,
      organizer,
      date,
      location,
      category,
      description,
      attendeeCount
    );
    res.status(200).send(newEvent);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// instruction: `PUT /events/:id`: Update an event
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const title = req.body.title;
    const organizer = req.body.organizer;
    const date = req.body.date;
    const location = req.body.location;
    const category = req.body.category;
    const description = req.body.description;
    const attendeeCount = req.body.attendeeCount;

    const updatedEvent = await updateEvent(
      id,
      title,
      organizer,
      date,
      location,
      category,
      description,
      attendeeCount
    );

    res.status(200).send(updatedEvent);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// instruction: `DELETE /events/:id`: Delete an event
router.delete("/:id", async (req, res) => {
  try {
    const eventId = req.params.id;
    const dEvent = await deleteEvent(eventId);
    res.status(200).send(dEvent);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// instruction: `GET /events/:id/feedback`: Get all feedback for a specific event by its id
router.get("/:id/feedback", async (req, res) => {
  try {
    const feedbacks = await getFeedbacksByEvent(req.body.id);
    res.status(200).send(feedbacks);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// instruction: `POST /events/:id/feedback`: Add feedback for a specific event by its id
router.post("/:id/feedback", async (req, res) => {
  try {
    const event = req.body.event;
    const attendeeName = req.body.attendeeName;
    const comment = req.body.comment;

    const newFeedback = await AddNewFeedback(event, attendeeName, comment);
    res.status(200).send(newFeedback);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = router;
