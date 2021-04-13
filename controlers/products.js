const data = require("../data.js");
const getProductList=(req,res)=>{
    res.send(data.products)
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

module.exports={getProductList,createProduct,getSingleProduct}