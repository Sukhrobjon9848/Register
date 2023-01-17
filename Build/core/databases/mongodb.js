"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_server_1 = __importDefault(require("../db-server"));
const mongoose_1 = __importDefault(require("mongoose"));
class mongoDB extends db_server_1.default {
    runDb() {
        mongoose_1.default.set('strictQuery', false);
        mongoose_1.default.connect("mongodb://localhost/Databases", (err) => {
            if (err) {
                console.log('MongoDb err..!' + err);
            }
            console.log('MongoDb started..!');
        });
    }
}
exports.default = mongoDB;
