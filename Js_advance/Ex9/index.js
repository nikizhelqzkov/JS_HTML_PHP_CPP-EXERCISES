import express from "express";
import apiRoute from "./api/index.js";
import cookieParser from "cookie-parser";
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());
app.use("/api", apiRoute);
app.use(express.static(path.join(__dirname, "public")));
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});

