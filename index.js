const express = require("express");
const productRouter = require("./routes/product.route");
require('dotenv').config();
const app = express();
const port = process.env.PORT || 9090

app.use(express.json());
app.use(express.static('public'));

app.get("/", (req, res) => {
res.send("this is a home route");
});

app.use('/product',productRouter);



app. listen(port, () => {
console. log(`server is running at http://localhost:${port}`);
});