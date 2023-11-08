const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Course = require ('../schemas/courseModel');
const { reset } = require('nodemon');

// Endpoint for all courses

router.get('/', async (req, res) => {
  try {

    // search query
    const courses = await Course.find({}); 
    //json response
    res.json(courses); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
