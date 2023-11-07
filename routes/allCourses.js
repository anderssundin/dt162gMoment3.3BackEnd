const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Course = require ('../schemas/courseModel');
const { reset } = require('nodemon');
// En endpoint för att hämta alla kurser
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find({}); // Använd Mongoose för att hämta alla kurser
    res.json(courses); // Skicka alla kurser som JSON-svar
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
