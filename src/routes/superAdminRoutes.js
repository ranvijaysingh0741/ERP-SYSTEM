const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');
const controller = require('../controllers/superAdminController');

router.use(auth, role('superadmin'));

router.get('/dashboard', controller.getDashboard);

router.post('/admins', controller.createAdmin);
router.get('/admins', controller.getAdmins);
router.delete('/admins/:id', controller.deleteAdmin);

router.post('/assign-center', controller.assignCenter);

router.post('/states', controller.addState);
router.post('/districts', controller.addDistrict);
router.post('/centers', controller.addCenter);

router.get('/admissions', controller.getAllAdmissions);
router.put('/admissions/:id/override', controller.overrideAdmission);

router.get('/reports/state', controller.getStateReport);
router.get('/activity-logs', controller.getActivityLogs);

module.exports = router;