import asyncHandler from "../middleware/asyncHandler.js";
import Portfolio from '../models/portfolioModel.js';

//@dec fetch all portfolio
//@route GET /api/portfolio
//@access public

const getPortfolio = asyncHandler(async (req, res) => {
    const portfolio = await Portfolio.find();
    res.status(200).json(portfolio);
});

//@dec fetch a portfolio
//@route GET /api/portfolio/:id
//@access Public

const getPortfolioById = asyncHandler(async (req, res) => {
    const portfolio = await Portfolio.findById(req.params.id);
    if(portfolio){
        return res.json(portfolio);
    }else{
        res.status(404);
        throw new Error('Resource not found!');
    }

    res.status(404).json({ message : 'Portfolio not found!'})
})

//@des Create a portfolio
//@route POST /api/portfolio
//@access Private/admin

const createPortfolio = asyncHandler(async (req, res) => {
    const portfolio = new Portfolio({
        user : req.user._id,
        name : "Sample Portfolio",
        description : "Sample Portfolio Description",
        image : "/images/sample.jpg"
    });

    const createPortfolio = await portfolio.save();
    res.status(201).json(createPortfolio);
});

//@dec Update a portfolio
//@route PUT /api/slider/:id
//@access Private/Admin

const updatePortfolio = asyncHandler(async (req, res) => {
    const { name, description, image } = req.body;

    const portfolio = await Portfolio.findById(req.params.id);

    if(portfolio){
        portfolio.name = name;
        portfolio.description = description;
        portfolio.image = image;

        const updatedPortfolio = await portfolio.save();
        res.json(updatedPortfolio);
    }else{
        res.status(404);
        throw new Error("Resource not found!")
    }
});

//@dec Delete a portfolio
//@route DELETE /api/portfolio/:id
//@access Private/Admin

const deletePortfolio = asyncHandler(async (req, res) => {

    const portfolio = await Portfolio.findById(req.params.id);

    if(portfolio){
        await Portfolio.deleteOne({ _id : portfolio._id });
        res.status(200).json({ message : "Portfolio removed" });
    }else{
        res.status(404);
        throw new Error("Resource not found.");
    }
});

export {
    getPortfolio,
    getPortfolioById,
    createPortfolio,
    updatePortfolio,
    deletePortfolio
};
