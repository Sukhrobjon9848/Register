import mongoDB from "./core/databases/mongodb";
import dbServer from "./core/db-server";
import expressServer from "./core/servers/expressServer";
import webServer from "./core/web-server";

function server(expressServer: webServer, database: dbServer) {
    expressServer.runServer()
    database.runDb()
    expressServer.router()
}
server(new expressServer(4000, 'localhost'), new mongoDB())