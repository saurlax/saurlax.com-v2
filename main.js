import express from "express";
import fs from "fs";
import utils from "./utils/index.js";

try {
  const env = fs.readFileSync(".env", "utf-8");
  env.split("\n").forEach(str => {
    if (str[0] === "#") return;
    const pair = str.split("=");
    process.env[pair[0]] = pair[1];
  });
} catch {
  console.error(".env file included necessary configuration is missing");
}

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.get("/", (req, res, next) => {
  res.render("home");
});
app.use(express.static("public"));

app.listen(process.env.PORT);
console.log(`Server is listening on port ${process.env.PORT}`);