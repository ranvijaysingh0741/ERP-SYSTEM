const router = require("express").Router();

const studentController =
require("../controllers/studentController");

const authMiddleware =
require("../middleware/authMiddleware");

const role = require("../middleware/roleMiddleware");

// router.get(
//   "/dashboard",
//   authMiddleware,
//   (req, res) => {

//     res.json({
//       message: "Protected Route Access",
//       user: req.user
//     });

//   }
// );


// Protected Routes
router.get("/status",
 authMiddleware,
 studentController.getStatus
);

router.get("/timetable",
 authMiddleware,
 studentController.getTimetable
);

router.get("/documents",
 authMiddleware,
 studentController.getDocuments
);

router.get("/notifications",
 authMiddleware,
 studentController.getNotifications
);

module.exports = router;
