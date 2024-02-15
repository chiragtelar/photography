import asyncHandler from "../middleware/asyncHandler.js";
import Slider from "../models/sliderModel.js";

//@des fetch all slider 
//@route GET /api/slider
//@access Public

const getSlider = asyncHandler(async (req, res) => {
    const slider = await Slider.find();
    res.status(200).json(slider);
})

// @des Create a slider
// @route POST /api/slider
// @access Private/admin
const createSlider = asyncHandler(async (req, res) => {
    const slider = new Slider({
      user: req.user._id,
      name: "Sample Name",
      description: "Sample description",
      image: "/images/sample.jpg"
    });
  
    const createdSlider = await slider.save();
    res.status(201).json(createdSlider);
  });

  export {
    getSlider,
    createSlider
  };