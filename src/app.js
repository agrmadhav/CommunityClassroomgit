const express = require("express");
require("../src/db/conn");
const MensRanking = require("../src/models/mens");
const router = require("./routes/men")
const app = express();
const PORT = process.env.PORT || 3000;

// app.get("/", async(req,res) => {
//     res.send("hello duniya");
// })

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`server is listening at ${PORT}`);
})