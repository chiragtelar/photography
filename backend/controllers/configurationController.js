import asyncHandler from "../middleware/asyncHandler.js";
import Configuration from "../models/configurationModel.js";

//@dec fetch all configuration
//@route GET /api/configuration
//@access public

const getConfiguration = asyncHandler(async (req, res) => {
    const configuration = await Configuration.find();
    res.status(200).json(configuration);
});


//@dec fetch a configuration
//@route GET /api/configuration/:id
//@access Public

const getConfigurationById = asyncHandler(async (req, res) => {
    const configuration = await Configuration.findById(req.params.id);
    if(configuration){
        return res.json(configuration);
    }else{
        res.status(404);
        throw new Error("Resource not found!");
    }

    res.status(404).json({ message : 'Configuration not found!'})
});


//@des Create a configuration   
//@route POST /api/configuration
//@access Private/admin

const createConfiguration = asyncHandler(async (req, res) => {
    
    const { name, url_key, value } = req.body;

    const configuration = new Configuration({
        user : req.user._id,
        name : name,
        url_key : url_key,
        value : value
    });

    const createConfiguration = await configuration.save();
    res.status(201).json(createConfiguration);
})


//@dec Update a configuration
//@route PUT /api/configuration/:id
//@access Private/Admin

const updateConfiguration = asyncHandler(async (req, res) => {
    const { name, value } = req.body;

    const configuration = await Configuration.findById(req.params.id);

    if(configuration){
        configuration.name = name;
        configuration.value = value;

        const updatedConfiguration = await configuration.save();
        res.json(updatedConfiguration);
    }else{
        res.status(404);
        throw new Error("Resource not found!");
    }
})


//@dec Delete a configuration
//@route DELETE /api/configuration/:id
//@access Private/admin

const deleteConfiguration = asyncHandler(async (req, res) => {

    const configuration = await Configuration.findById(req.params.id);

    if(configuration){
        await Configuration.deleteOne({_id : configuration._id });
        res.status(200).json({ message : "Portfolio removed"})
    }else{
        res.status(404);
        throw new Error("Resource not found.")
    }
});

export {
    getConfiguration,
    getConfigurationById,
    createConfiguration,
    updateConfiguration,
    deleteConfiguration
};