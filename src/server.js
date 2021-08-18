const cors = require("cors");
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
const initRoutes = require("./routes/");


app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json());

initRoutes(app);

app.listen(port, ()=> {
    console.log(`API is running in ${port}`);
});