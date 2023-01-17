"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = __importDefault(require("./core/databases/mongodb"));
const expressServer_1 = __importDefault(require("./core/servers/expressServer"));
function server(expressServer, database) {
    expressServer.runServer();
    database.runDb();
    expressServer.router();
}
server(new expressServer_1.default(4000, 'localhost'), new mongodb_1.default());
