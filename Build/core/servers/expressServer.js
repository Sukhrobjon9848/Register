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
const express_1 = __importDefault(require("express"));
const login_1 = __importDefault(require("../../auth/login"));
const register_1 = __importDefault(require("../../auth/register"));
const web_server_1 = __importDefault(require("../web-server"));
const user_helper_1 = __importDefault(require("../../user/user.helper"));
const model_user_1 = __importDefault(require("../../user/model/model-user"));
const mongoose_1 = __importDefault(require("mongoose"));
class expressServer extends web_server_1.default {
    runServer() {
        this.app = (0, express_1.default)();
        this.app.listen(this.port, () => {
            console.log(`Server started this ${this.port}`);
        });
    }
    router() {
        this.app.use(express_1.default.json());
        this.app.post('/register', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, register_1.default)(req.body);
            try {
                res.status(201).send(data);
            }
            catch (error) {
                res.status(401).send(error);
            }
        }));
        this.app.post('/login', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const userLogin = yield (0, login_1.default)(req.body);
            if (!userLogin) {
                return res.send("Siz ro'yhatdan o'tmagansiz...!");
            }
            return res.status(200).json({ msg: "OK" });
        }));
        this.app.post('/news', (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
            // console.log(token);
            let user = yield user_helper_1.default.refreshToken(String(token));
            const data = yield model_user_1.default.findOne({ _id: new mongoose_1.default.Types.ObjectId(user.userId) });
            // console.log("err:", data?.errors?.message);
            if (data) {
                res.send("OK");
            }
            res.send("NNo");
        }));
    }
}
exports.default = expressServer;
