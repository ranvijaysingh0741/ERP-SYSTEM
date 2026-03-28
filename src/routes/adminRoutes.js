const router = require("express").Router();

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const adminController = require("../controllers/adminController");

/* DASHBOARD */

router.get("/dashboard", auth, role("admin"), adminController.getDashboardStats);

/* ALL STUDENTS */

router.get("/students", auth, role("admin"), adminController.getAllStudents);

/* CENTERS */

router.get("/centers", auth, role("admin"), adminController.getMyCenters);

/* PENDING STUDENTS */

router.get("/pending", auth, role("admin"), adminController.getPendingStudents);

/* STUDENT DETAIL */

router.get("/student/:id", auth, role("admin"), adminController.getStudentDetail);

/* APPROVE */

router.put("/approve/:id", auth, role("admin"), adminController.approveStudent);

/* REJECT */

router.put("/reject/:id", auth, role("admin"), adminController.rejectStudent);

module.exports = router;