import mongoose from "mongoose";
import userDto from "../dto/user-dto-data";

const modelUser = new mongoose.Schema<userDto>({
   username: {
      type: String,
      minlength: 3,
      maxlength: 52,
      required: true
   },
   email: {
      type: String,
      minlength: 4,
      required: true,
      unique: true
   },
   password: {
      type: String,
      minlength: 4,
      maxlength: 128,
      required: true
   }
})


const madel = mongoose.model<userDto>("user", modelUser)

export default madel