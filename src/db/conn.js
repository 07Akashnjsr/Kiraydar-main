const mongoose = require("mongoose");

mongoose
  .connect("mongodb://0.0.0.0:27017/kirayedar", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("database connected");
  })
  .catch(err => {
    console.log("Could not connect", err);
  });
