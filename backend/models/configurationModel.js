import mongoose from "mongoose";

const configurationSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    },
    name : {
        type : String,
        required : true
    },
    url_key : {
        type : String,
        required : true
    },
    value : {
        type : String,
        required : true
    }
},{
    timestamps : true
});

const Configuration = mongoose.model('Configuration', configurationSchema);

export default Configuration;