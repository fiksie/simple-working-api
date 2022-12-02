const express = require("express");
const app = express();
const PORT = 8000;

const cors = require("cors");
const { res, req } = require("express");
app.use(cors({origin: true}));

const rappers = {
    "catch 22": {
        "age": 28,
        "birthName": "Shiya Bylylaja",
        "birthPlace": "London, England"
    },
    "unknown": {
        "age": 0,
        "birthName": "unknown",
        "birthPlace": "unknown"
    }
}

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.get('/api/:name', (req,res)=>{
    const rapperName = req.params.name.toLowerCase();
    if(rappers[rapperName]){
        res.json(rappers[rapperName]);
    }else{
        res.json(rappers['unknown']);
    }
})

app.listen(PORT, () =>{
    console.log(`The server is running on PORT ${PORT}. You better go catch it!`);

})
