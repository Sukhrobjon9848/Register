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
exports.checkUser = exports.createUser = void 0;
const model_user_1 = __importDefault(require("./model/model-user"));
const user_helper_1 = __importDefault(require("./user.helper"));
function createUser(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield model_user_1.default.create({
                username: data.username,
                email: data.email,
                password: yield user_helper_1.default.createHashPas(data.password)
            });
            return {
                user: {
                    username: user.username,
                    email: user.email
                },
                token: yield user_helper_1.default.createToken(user._id)
            };
        }
        catch (error) {
            return error.message;
        }
    });
}
exports.createUser = createUser;
function checkUser(data) {
    const user = model_user_1.default.findOne({ email: data.email });
    return user;
}
exports.checkUser = checkUser;
