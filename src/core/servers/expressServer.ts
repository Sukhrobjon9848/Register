import express, { Express, Request, Response } from "express";
import login from "../../auth/login";
import register from "../../auth/register";
import webServer from "../web-server";
import userHelper from "../../user/user.helper"
import madel from "../../user/model/model-user";
import { ObjectId, ObjectID } from "bson";
import mongoose from "mongoose";
export default class expressServer extends webServer {
    app!: Express
    runServer(): void {
        this.app = express()
        this.app.listen(this.port, () => {
            console.log(`Server started this ${this.port}`);

        })
    }
    router(): void {
        this.app.use(express.json())

        this.app.post('/register', async (req: Request, res: Response) => {
            const data = await register(req.body)

            try {
                res.status(201).send(data)
            } catch (error) {
                res.status(401).send(error)
            }
        })
        this.app.post('/login', async (req, res) => {
            const userLogin = await login(req.body)
            if (!userLogin) {
                return res.send("Siz ro'yhatdan o'tmagansiz...!")
            }
            return res.status(200).json({ msg: "OK" })
        })
        this.app.post('/news', async (req, res) => {
            const token = req.headers.authorization?.split(' ')[1]
            // console.log(token);
            let user = await userHelper.refreshToken(String(token))
            const data = await madel.findOne({ _id: new mongoose.Types.ObjectId(user.userId) })
            // console.log("err:", data?.errors?.message);

            if (data) {
                res.send("OK")
            }
            res.send("NNo")
        })
    }

}