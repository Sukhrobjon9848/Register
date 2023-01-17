import bcrypt from "bcrypt"
import jwt, { JwtPayload } from "jsonwebtoken"
import { ObjectId, Types } from "mongoose"

class userHelper {
    createToken(userId: Types.ObjectId): string {
        const token = jwt.sign({ userId }, "Secret_key", { expiresIn: '5s' })
        return token
    }

    async refreshToken(token: string): Promise<{ userId: string }> {
        const data = await jwt.verify(token, "Secret_key") as JwtPayload
        return {
            userId: data.userId
        }
    }

    async createHashPas(password: string) {
        const pass = bcrypt.hashSync(password, 10)

        return pass
    };
}

export default new userHelper