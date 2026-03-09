const express = require('express');
const router = express.Router();

const controller =
 require('../controllers/publicController');

router.get('/notices', controller.getNotices);
router.get('/programs', controller.getPrograms);
router.get('/stats', controller.getStats);

module.exports = router;