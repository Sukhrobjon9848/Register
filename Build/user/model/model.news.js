"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const newsModel = new mongoose_1.default.Schema({
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
});
const newMadel = mongoose_1.default.model('new', newsModel);
exports.default = newMadel;
