const express = require("express"),   //Declarations for file variables
  
app = express();

PORT = process.env.PORT || 3000;    //PORT declaration

apiRoute = require("./routes/apiRoute");    //The required routes for this project
htmlRoute = require("./routes/htmlRoute");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

apiRoute(app);
htmlRoute(app);

app.listen(PORT, () => {
  console.log("Your application is running at http://localhost:" + PORT);   //Successful connection declaration
});
