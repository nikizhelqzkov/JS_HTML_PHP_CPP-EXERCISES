import express from "express";
import userRouter from "./userRouter.js";
const apiRoute = express.Router();

apiRoute.use('/users',userRouter);

export default apiRoute;
