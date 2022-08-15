const { listenerCount } = require('../models/e-commerce/Category');
const TestPagination = require('../models/TestPagination')

const getAllProductStatic = async (req, res) => {
    const products = await TestPagination.find({
        featured: true
    });
    res.status(200).json({ products: products, msg: "Product test route" })
}

const getAllProduct = async (req, res) => {
    const { featured, company, name, sort, fields, numericFilters } = req.query;

    const queryObject = {}

    if(featured) {
        queryObject.featured = featured === 'true' ? true: false;
    }

    if(company) {
        queryObject.company = company;
    }
    
    if(name) {
        queryObject.name = { $regex: name, $options: 'i'};
    }

    if(numericFilters) {
        // console.log(numericFilters);
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte',
        }

        const regEx = /\b(<|>|=|>=|<=)\b/g
        let filter = numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-`)
    
        const options = ['price', 'rating']
        filter.split(',').forEach((item) => {
            const [field, operator, value] = item.split('-')
            if(options.includes(field)) {
                queryObject[field] = { [operator]: Number(value) }
            }
        })

    }
    console.log(queryObject);
    let result = TestPagination.find(queryObject);
    if(sort) {
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList)
        // result = result.sort("name price")
    } else {
        result = result.sort('createdAt')
    }
    
    if(fields) {
        const fieldsList = fields.split(',').join(' ');
        result = result.select(fieldsList);
    }

    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page-1) * limit;

    result = result.skip(skip).limit(limit)
    // console.log(result);
    const products = await result;
    res.status(200).json({ products, ubHits: products.length })
}

module.exports = {
    getAllProductStatic,
    getAllProduct
}