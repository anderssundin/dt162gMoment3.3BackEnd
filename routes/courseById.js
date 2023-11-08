const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Course = require('../schemas/courseModel');

// course by id
router.get('/:id', async (req, response) => {
  // save id from req
  const id = req.params.id;

  try {
    //find by id
    const course = await Course.find({ _id: id });
    // if no id
    if (course.length === 0) {

      response.status(404).json({
        message: "Ingen data med detta id finns i databasen"
      })

    } else {
      response.json(course);
    }



  } catch (err) {

    response.status(500).json({ error: err.message });

  }


});

module.exports = router;
