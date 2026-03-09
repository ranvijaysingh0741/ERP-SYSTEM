require("dotenv").config();
require("./config/db");

const express = require("express");
const path = require("path");
const cors = require("cors");
//const generateToken = require("./utils/generateToken");
const studentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/authRoutes");
const publicRoutes =require('./routes/publicRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// ✅ AUTH ROUTES
app.use(
  "/api/auth",
  require("./routes/authRoutes")
);


// ✅ STUDENT ROUTES
app.use(
  "/api/student",
  require("./routes/studentRoutes")
);


// ✅ Test Route
app.get("/", (req, res) => {
  res.send("Backend Running ✅");
});


// ✅ Server Start
app.listen(process.env.PORT, () => {
  console.log(
    `Server running on port ${process.env.PORT}`
  );
});

app.use('/api/center', require('./routes/centerRoutes'));
app.use('/uploads', express.static('uploads'));

//admin route ko connect kiya 
app.use("/api/admin",require("./routes/adminRoutes"));

//super admin ko cannet karega


app.use('/api/superadmin', require('./routes/superAdminRoutes'));

app.listen(5000, () => console.log("Server Running on 5000"));



// app.get("/token-test", (req, res) => {

//   const user = {
//     id: 1,
//     role: "student"
//   };

//   const token = generateToken(user);

//   res.json({ token });

// });
//const PORT = 5000;

// Static Frontend Serve
// app.use(
//   express.static(
//     path.join(__dirname, "../frontend")
//   )
// );

// Default Route
// app.get("/", (req, res) => {
//   res.sendFile(
//     path.join(__dirname, "../frontend/login.html")
//   );
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
app.use('/api/public', publicRoutes);
app.use(cors({
  origin: "http://localhost:3000"
}));