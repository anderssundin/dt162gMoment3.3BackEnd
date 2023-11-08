const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Course = require('../schemas/courseModel');
const { reset } = require('nodemon');
//Endpoint to post new course
router.post('/', async (req, res) => {
    try {
        // destruct request into const
        const { code, name, progression, term, syllabus } = req.body;

        if (!code || !name || !progression || !term || !syllabus) {
            return res.status(400).json({ error: 'Alla fält måste vara ifyllda.' });
        }
        const newCourse = new Course({
            name,
            code,
            syllabus,
            term,
            progression,
            
        })

        await newCourse.save();
        res.status(201).json({ message: 'Kurs tillagd!', course: newCourse})
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
