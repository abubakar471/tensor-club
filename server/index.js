const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cors());

app.post("/api/create-new-project", (req,res) => {
    console.log(req.body);

    res.json({
        success : true,
        result : {
            title : req.body.fieldOne,
            skills : req.body.fieldTwo,
            about : req.body.fieldThree
        }
    })
})

app.listen(8000, () => {
    console.log("server is running on port 8000.......");
})