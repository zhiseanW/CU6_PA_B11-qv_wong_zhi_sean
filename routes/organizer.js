const express = require("express");
const router = express.Router();

// instruction: import all the necessary functions from controllers/organizer.js
const {
  getOrganizer,
  getOrganizers,
  AddNewOrganizer,
  updateOrganizer,
  deleteOrganizer,
} = require("../controllers/organizer");

// instruction: `GET /organizers`: List all organizers
router.get("/", async (req, res) => {
  try {
    const organizers = await getOrganizers(req.query.name);
    res.status(200).send(organizers);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// instruction: `GET /organizers/:id`: Get a specific organizer by its id
router.get("/:id", async (req, res) => {
  try {
    const organizer = await getOrganizer(req.params.id);
    res.status(200).send(organizer);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// instruction: `POST /organizers`: Add a new organizer
router.post("/", async (req, res) => {
  try {
    const name = req.body.name;
    const bio = req.body.bio;
    const contact = req.body.contact;
    const eventsOrganized = req.body.eventsOrganized;

    const newOrganizer = await AddNewOrganizer(
      name,
      bio,
      contact,
      eventsOrganized
    );
    res.status(200).send(newOrganizer);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// instruction: `PUT /organizers/:id`: Update an organizer
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const name = req.body.name;
    const bio = req.body.bio;
    const contact = req.body.contact;
    const eventsOrganized = req.body.eventsOrganized;
    const updatedOrganizer = await updateOrganizer(
      id,
      name,
      bio,
      contact,
      eventsOrganized
    );
    res.status(200).send(updatedOrganizer);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// instruction: `DELETE /organizers/:id`: Delete an organizer
router.delete("/:id", async (req, res) => {
  try {
    const organizerId = req.params.id;
    const dOrganizer = await deleteOrganizer(organizerId);
    res.status(200).send(dOrganizer);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = router;
