const express = require("express");
const {getProductList,createProduct,getSingleProduct} = require("../controlers/products.js");
const data = require("../data.js");
const productRouter =express.Router()

productRouter.get("/",getProductList)
productRouter.get("/:id",getSingleProduct)
productRouter.post("/new",createProduct)


module.exports=productRouter