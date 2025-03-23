import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import UserRoute from "./routes/NoteRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(3000, () => console.log("Server connected"));
