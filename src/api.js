const express = require('express');
const api = express();

const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res)=>{

})

api.listen(PORT, ()=>{
    console.log(`[API Up & Running at PORT ${PORT}]`);
});