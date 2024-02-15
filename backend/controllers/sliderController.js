import asyncHandler from "../middleware/asyncHandler.js";
import Slider from "../models/sliderModel.js";

//@des fetch all slider 
//@route GET /api/slider
//@access Public

const getSlider = asyncHandler(async (req, res) => {
    const slider = await Slider.find();
    res.status(200).json(slider);
})