const express = require('express');
const { request } = require('http');
const app = express();
const path = require('path');
const port = 5002;

app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.get('/', (request,response)=>{
  
response.sendFile(path.join(__dirname, 'vista.html'));

});


app.listen(port,()=>{
console.log('Express listen on port'+ port);
});
app.get('/addAlumno', (request,response)=>{
    //response.send('Hola aprendi a usar node..! :)');
response.sendFile(path.join(__dirname, './cuotascolegionode/addAlumno.html'));

});