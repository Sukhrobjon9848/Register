"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class userHelper {
    createToken(userId) {
        const token = jsonwebtoken_1.default.sign({ userId }, "Secret_key", { expiresIn: '5s' });
        return token;
    }
    refreshToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield jsonwebtoken_1.default.verify(token, "Secret_key");
            return {
                userId: data.userId
            };
        });
    }
    createHashPas(password) {
        return __awaiter(this, void 0, void 0, function* () {
            const pass = bcrypt_1.default.hashSync(password, 10);
            return pass;
        });
    }
    ;
}
exports.default = new userHelper;
