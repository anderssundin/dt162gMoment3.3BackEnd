const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Course = require('../schemas/courseModel');

// Skapa en endpoint för att hämta en kurs med id
router.get('/:id', async (req, response) => {
  // Spara medskickat id
  const id = req.params.id;

  try {
 const course = await Course.find({ _id: id});

 if (course.length === 0){

  response.status(404).json({
    message: "Ingen data med detta id finns i databasen"
  })

 }else {
  response.json(course); 
 }



  } catch (err) {

    response.status(500).json({ error: err.message });

  }


});

module.exports = router;
