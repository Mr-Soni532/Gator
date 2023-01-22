const products = require("../Config/product_data"); // data
const ProductModel = require("../Model/product.model")
exports.fetchProduct = async (req, res) => {
    let page = +req.query.page || 1;
    try {
        const user = await ProductModel.find({tag: req.params.tag}).skip((page-1)*20).limit(20);
        res.send(user);
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error)
    }
}
exports.fetch_LTH = async (req, res) => {
    let page = +req.query.page || 1;
    try {
        const user = await ProductModel.find({tag: req.params.tag}).skip((page-1)*20).limit(20).sort({range_start: -1});
        res.send(user);
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error)
    }
}
exports.fetch_HTL = async (req, res) => {
    let page = +req.query.page || 1;
    try {
        const user = await ProductModel.find({tag: req.params.tag}).skip((page-1)*20).limit(20).sort({ range_start: 1});
        res.send(user);
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error)
    }
}

exports.searchProduct = async (req, res) => {
    let page = +req.query.page;
    let limit = 20;
    let query = req.query;
    try {
        for (key in query) {
            if (key == 'page') continue;
            let str = query[key];
            let reg = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
            query[key] = { $in: new RegExp(`${reg}`) };
        }
        const data = await ProductModel.find().skip((page - 1) * limit).limit(limit);
        if (data.length) res.send(data)
        else res.send('Data is not available!')
    } catch (error) {
        res.status(500).send("Something went wrong!");
    }
}


exports.addProduct = async (req, res) => {
    let newProduct = req.body;
    try {
        newProduct.userId = req.userID;
        newProduct = new ProductModel(req.body);
        await newProduct.save()
        res.status(200).json({ message: 'Product is added in cart' });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error)
    }
}

exports.deletProduct = async (req, res) => {
    try {
        await ProductModel.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'Product has been removed from cart' });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

//!------- Add all product: Admin
exports.AddAllProducts = async (req,res)=>{
    try {
        await ProductModel.insertMany(products)     
        res.send('added all products from admin')  
    } catch (error) {
        res.status(500).send('error while adding all products')
        console.log(error)
    }
}