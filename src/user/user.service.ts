import { ObjectId } from "bson";
import loginDto from "./dto/login-dto";
import userDto from "./dto/user-dto-data";
import madel from "./model/model-user";
import userHelper from "./user.helper";

export async function createUser(data: userDto) {

  try {
    const user = await madel.create({
      username: data.username,
      email: data.email,
      password: await userHelper.createHashPas(data.password)

    })

    return {
      user: {
        username: user.username,
        email: user.email
      },
      token: await userHelper.createToken(user._id)
    }
  } catch (error: any) {
    return error.message
  }
}


export function checkUser(data: loginDto) {
  const user = madel.findOne({ email: data.email })
  return user
}