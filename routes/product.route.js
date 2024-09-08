const { Router } = require("express");
const upload = require("../middlewares/fileUpload");
const { readFile, writeFile } = require("../utils/fs");

const productRouter = Router();

//get all the products
productRouter.get("/", (req, res) => {
try {
  // res.send("this is a route for all the products")
  const data = readFile("databases/db.json");
  res.json({data:data});
} catch (err) {
console. log(err);
res.status(500). json({ message: "Internal server error" });

}

});

//get the single product
productRouter.get("/:id", (req, res) => {
  try {
    res.send("this is a route to get the single product");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

//create a single product
productRouter.post("/",upload.single('product') ,(req, res) => {
  // console.log(req.file,req.body);
  try {
  if(req.body){
    const payload={
      name:req.body.name,
      price:req.body.price,
      path:req.file.path
    }
    let data=readFile("databases/db.json");
    console.log(data.products);
    data.products.push(payload);
    let result=writeFile("databases/db.json",data);
    console.log(result);
    // console.log(payload);
  }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

//update a single product
productRouter.patch("/:id", (req, res) => {
  try {
  } catch (err) { 
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

//delete a single product
productRouter.delete("/:id", (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports=productRouter;
