const express = require('express');
const app = express();
const PORT = 8000;

const rappers = {
    'some dude': {
        'age': 25,
        'birthName': 'Nathan',
        'birthLocation': 'Chicago, Illinois'
    },
    'savage 21': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    }
};

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
});

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase();
    if(rappers[rapperName]){
        response.json(rappers[rapperName]);
    }else{
        response.json(rappers['some dude']);
    }
});

app.listen(PORT, () =>{
    console.log(`The server is now running on port ${PORT}! You better go catch it!`);
});