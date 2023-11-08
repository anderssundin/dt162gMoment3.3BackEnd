const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Course = require ('../schemas/courseModel');



// delete endpoint
router.delete('/:id',  async (req, response) => {
    //save id
   const id = req.params.id;
try {
// send query
const course = await Course.deleteOne({ _id: id})

if (course.deletedCount === 1) {
    response.status(200).json({
        message: `Data med id ${id} raderad`
    });
} else {
    response.status(404).json({
        message : `Inget dokument med id ${id} hittades`
    });
}




} catch (error) {

    response.status(500).json({
        error: error.message
    });
}

});

module.exports = router;