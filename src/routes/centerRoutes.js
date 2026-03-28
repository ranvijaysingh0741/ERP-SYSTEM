const express = require('express');
const router = express.Router();

const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');
const upload = require('../middleware/uploadMiddleware');

const centerController = require('../controllers/centerController');


// ================= ADD STUDENT =================
router.post(
  '/add-student',
  auth,
  role('center'),
  upload.fields([
    { name: 'marksheet', maxCount: 1 },
    { name: 'tc', maxCount: 1 },
    { name: 'id_proof', maxCount: 1 },
    { name: 'additional_doc', maxCount: 1 },
    { name: 'approval_document', maxCount: 1 }
  ]),
  centerController.addStudent
);


// ================= GET STUDENTS =================
// 🔥 SAME API FRONTEND USE KAREGA
router.get(
  '/students',
  auth,
  role('center'),
  centerController.getMyStudents
);


// ================= TRACK STATUS =================
router.get(
  '/status/:id',
  auth,
  role('center'),
  centerController.getStudentStatus
);

router.get(
  '/notifications',
  auth,
  role('center'),
  centerController.getNotifications
);

module.exports = router;