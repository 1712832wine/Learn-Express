const express = require('express');
const router = express.Router();

const CoursesController = require('../app/controllers/CoursesController');

router.post('/create', CoursesController.create);
router.post('/:_id/edit', CoursesController.edit);
router.delete('/:_id/delete', CoursesController.delete);
router.post('/create', CoursesController.create);
router.get('/:slug', CoursesController.show_detail);
router.get('/', CoursesController.index);

module.exports = router;