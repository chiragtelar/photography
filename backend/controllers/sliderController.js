import asyncHandler from "../middleware/asyncHandler.js";
import Slider from "../models/sliderModel.js";

//@des fetch all slider 
//@route GET /api/slider
//@access Public

const getSlider = asyncHandler(async (req, res) => {
    const slider = await Slider.find();
    res.status(200).json(slider);
})

//@dec fetch a slider
//@route GET /api/slider/:id
//@access Public

const getSliderById = asyncHandler(async (req, res) => {
    const slider = await Slider.findById(req.params.id);
    if(slider){
        return res.json(slider);
    }else{
        res.status(404);
        throw new Error('Resource not found!');
    }

    res.status(404).json({ message : "Slider not found!"});
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

  //@dec Update a slider
  //@route PUT /api/slider/:id
  //@access Private/Admin

  const updateSlider = asyncHandler(async (req, res) => {
    const { name, description, image } = req.body;

    const slider = await Slider.findById(req.params.id);

    if(slider){
        slider.name = name;
        slider.description = description;
        slider.image = image;

        const updatedSlider = await slider.save();

        res.json(updatedSlider);
    }else {
        res.status(404);
        throw new Error('Resorce not found!');
    }
  });

  //@dec Delete a slider
  //@route  DELETE /api/slider/:id
  //@access Private/Admin

  const deleteSlider = asyncHandler(async (req, res) => {

    const slider = await Slider.findById(req.params.id);

    if(slider){
        await Slider.deleteOne({_id : slider._id});
        res.status(200).json({ message : "Slider removed"});
    }else{
        res.status(404);
        throw new Error("Resource not found.");
    }
  })
  export {
    getSlider,
    getSliderById,
    createSlider,
    updateSlider,
    deleteSlider
  };