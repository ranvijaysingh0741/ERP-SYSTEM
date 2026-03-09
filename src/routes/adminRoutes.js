const router=require("express").Router();

const auth=require("../middleware/authMiddleware");
const role=require("../middleware/roleMiddleware");

const adminController=require("../controllers/adminController");

router.get(
 "/centers",
 auth,
 role("admin"),
 adminController.getMyCenters
);

router.get(
 "/pending",
 auth,
 role("admin"),
 adminController.getPendingStudents
);

router.get(
 "/student/:id",
 auth,
 role("admin"),
 adminController.getStudentDetail
);

router.put(
 "/approve/:id",
 auth,
 role("admin"),
 adminController.approveStudent
);

router.put(
 "/reject/:id",
 auth,
 role("admin"),
 adminController.rejectStudent
);

router.get(
 "/dashboard",
 auth,
 role("admin"),
 adminController.getDashboardStats
);

module.exports=router;