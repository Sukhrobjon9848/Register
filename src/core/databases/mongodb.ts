import dbServer from "../db-server";
import mongoose from "mongoose"
export default class mongoDB extends dbServer {
    runDb(): void {
        mongoose.set('strictQuery', false)
        mongoose.connect("mongodb://localhost/Databases", (err) => {
            if (err) {
                console.log('MongoDb err..!' + err);

            }
            console.log('MongoDb started..!');

        })
    }

}