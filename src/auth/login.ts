import loginDto from "../user/dto/login-dto";
import { checkUser } from "../user/user.service";

export default function login(data: loginDto) {
    return checkUser(data)
}