import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import products from "./data/Products.js";
import productRoute from "./Routes/ProductRoutes.js";
import { NotFound, errorHandler } from "./Middleware/Error.js";
//import userRoute from "./Routes/UserRoutes.js";
import users from "./data/users.js";
import userInfo from "./data/userInfo.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());


//get user


//get products
app.get("/api/products", (req, res) => {
    res.json(products);
})

//get product by id
app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
})


// app.use("/api/users", userRoute);

app.use("/api/users", (req, res) => {
    res.json(users);
})

app.get("/api/userinfo", (req, res) => {
    res.json(userInfo)
})

// // API
// app.use("/api/import", ImportData)
// app.use("/api/products", productRoute);
// //app.use("/api/orders", orderRouter);


//ERROR
app.use(NotFound);
app.use(errorHandler);

app.get("/", (req, res) => {
    res.send(" API is Running...")
})

const PORT = process.env.PORT;

app.listen(PORT, console.log(`server run in port ${PORT}`));