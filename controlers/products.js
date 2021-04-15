const data = require("../data.js");
const Product = require("../models/productModel.js")

const getProductList=async(req,res)=>{
    const products = await Product.find({})
    res.send(products)
}
const createProduct=(req,res)=>{
    const {name,image,price} = req.body
    const newProduct = {id:price,name,image,price}
    data.products.push(newProduct)
    res.send(data.products)
}
const getSingleProduct=(req,res)=>{
    const id = req.params.id
    const product=data.products.find(p=>p.id==id)
    res.send(product)
}

const seed = async(req,res)=>{
    const products = await Product.insertMany(data.products)
    res.send(products)
}

module.exports={getProductList,createProduct,getSingleProduct,seed}