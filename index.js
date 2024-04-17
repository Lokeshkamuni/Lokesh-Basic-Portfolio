import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 4000;

app.use(express.static("public"));

app.get("/",(req,res) => {
    res.sendFile(__dirname + "/public/views/index.html");
})

app.get("/about",(req,res) => {
    res.sendFile(__dirname + "/public/views/about.html");
})
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})