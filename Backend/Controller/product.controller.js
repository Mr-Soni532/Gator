const ProductModel = require("../Model/product.model")

exports.fetchProduct = async (req,res)=>{
    try {
        const user = await ProductModel.find({userId: req.userID});
        res.send(user);
    } catch (error) {
        res.status(500).json({error: error.message})
        console.log(error)
    }
}

exports.addProduct = async (req,res)=>{
    const newProduct = req.body;
    try {
        newProduct.userId = req.userID;
        newProduct = new ProductModel(req.body);
        await newProduct.save()
        res.status(200).json({message: 'Product is added in cart'});
    } catch (error) {
        res.status(500).json({error: error.message});
        console.log(error)
    }
}

exports.deletProduct = async (req,res)=>{
    try {
        await ProductModel.findByIdAndDelete(req.params.id)
        res.status(200).json({message: 'Product has been removed from cart'});
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}