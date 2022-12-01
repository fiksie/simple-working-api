const express = require("express");
const app = express();


const cors = require("cors");
app.use(cors({origin: true}));

// Routes
app.get('/hello-world', (req, res) => {
    return res.status(200).send('Hello World!');
});

// Create
// post

app.get('/api/create', (req, res) => {
    (async () => {
        try{
            await db.collection('products').doc('/' + req.body.id + '/')
            .create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price
            })
            return res.status(200).send();
        }
        catch{
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

// Read
// get

// Update
// put

// Delete
// delete
