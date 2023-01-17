import userDto from "../user/dto/user-dto-data";
import { createUser } from "../user/user.service";

export default async function register(data: userDto) {

   const date = await createUser(data)
   return date
}