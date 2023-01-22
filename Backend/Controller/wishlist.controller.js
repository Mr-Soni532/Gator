const ProductModel = require("../Model/product.model");
const WishlistModel = require("../Model/whilelist.model")

exports.fetchProduct = async (req,res)=>{
    try {
        const user = await WishlistModel.find({userId: req.userID});
        res.send(user);
    } catch (error) {
        res.status(500).json({error: error.message})
        console.log(error)
    }
}
exports.fetchProduct_byId = async (req,res)=>{
    try {
        const user = await ProductModel.findById(req.params.id);
        res.send(user);
    } catch (error) {
        res.status(500).json({error: error.message})
        console.log(error)
    }
}

exports.addProduct = async (req,res)=>{
    let newProduct = req.body;
    try {
        newProduct.userId = req.userID;
        newProduct = new WishlistModel(req.body);
        await newProduct.save()
        res.status(200).json({message: 'Product is added in wishlist'});
    } catch (error) {
        res.status(500).json({error: error.message});
        console.log(error)
    }
}

exports.deletProduct = async (req,res)=>{
    try {
        await WishlistModel.findByIdAndDelete(req.params.id)
        res.status(200).json({message: 'Product has been removed from wishlist'});
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}