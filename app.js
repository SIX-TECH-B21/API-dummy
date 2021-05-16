require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.get("/", (req, res) => {
    res.send({
        "msg": "hello, world!"
    });
});

app.post("/", (req, res) => {
    const name = "johnny",
    age = "69",
    gender = "Male",
    latid = 1231234,
    longt = 12341234,
    symptoms = ["blabla", "bliblu"],
    therapy = {
        title: "blabliblu", 
        url: "sadfasdf"
    },
    hospital = [
        {
            title: "Siloam hospital",
            url: "www.google.com"
        },
        {
            title: "rsud",
            url: "youtube.com"
        }
    ],
    resultML = "hasil";

    res.send({
        "resultML": resultML,
        "name": name,
        "age": age,
        "gender": gender,
        "symptoms": symptoms,
        "therapy": therapy,
        "hospital": hospital
    });
});

app.listen(process.env.PORT, () => {
    console.log("Running at port: "+process.env.PORT);
});