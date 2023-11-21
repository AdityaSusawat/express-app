const express = require('express');
const { readFile } = require('fs').promises;

const app = express();

app.get('/', async (request, response) => { //request = user's incoming data ; response = your outgoing data        
        
    response.send(await readFile('./home.html', 'utf-8'));
    
});

//now we want our express app to start listening to the incoming requests
//We do that by defining a port

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'));