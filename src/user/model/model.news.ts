import mongoose from "mongoose";
import newsDto from "../../news/news-dto/news-dto";
import madel from "./model-user";


const newsModel = new mongoose.Schema({
    userId: {
        type: String,
        required: false,
        ref: 'madel'
    },
    title: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    }
})


const newMadel = mongoose.model('new', newsModel)

export default newMadel