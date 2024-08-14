const express = require("express");
const Product = require("./models/product.model.js");
const productRoute = require("./Routes/product.route.js");
const mongoose = require("mongoose");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  console.log("hey");
  res.send("hello from node api updated");
});

mongoose
  .connect(
    "mongodb+srv://bahalanant:DnxthxbvbtTOGFt7@cluster0.u4me7.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("server running on 3000");
    });
  });
