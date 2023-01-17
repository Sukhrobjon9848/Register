"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const modelUser = new mongoose_1.default.Schema({
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
});
const madel = mongoose_1.default.model("user", modelUser);
exports.default = madel;
