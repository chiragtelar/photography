import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    },
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    }
},{
    timestamps : true
})

const Portfolio = mongoose.model('Portfolio',portfolioSchema);

export default Portfolio;