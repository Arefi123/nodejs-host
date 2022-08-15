const Category = require('../../models/e-commerce/Category')

exports.SaveCategory = async (req, res) => {
    const newCategory = new Category(req.body);

    try {
        const savedCategory = await newCategory.save();
        res.status(200).json(savedCategory);
    } catch (error) {
        res.status(500).json(error);
    }

}