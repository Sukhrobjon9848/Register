"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("../user/user.service");
function login(data) {
    return (0, user_service_1.checkUser)(data);
}
exports.default = login;
