require("dotenv").env();

const express = require("express");
const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.post("/", (req, res) => {
    const name = req.body.name,
    age = req.body.age,
    gender = req.body.gender,
    latid = req.body.latitude,
    longt = req.body.longitude,
    symptoms = "blablabla then blablabla",
    therapy = "blabliblu",
    hospital = ["Siloam hospital", "rsud"];

    res.send({
        "name": name,
        "age": age,
        "gender": gender,
        "symptoms": symptoms,
        "therapy": therapy,
        "hospital": hospital
    });
});

app.listen(process.env.PORT);