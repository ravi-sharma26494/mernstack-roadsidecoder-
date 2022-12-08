const express =require('express');
const notes  = require('./data/notes')
const dotenv = require('dotenv')

const app = express();
dotenv.config()

const PORT = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.status(200).json({
        message:'Hello, this is video 4 and only test'
    })
});

//all notes
app.get('/api/notes', (req, res)=>{
    res.json(notes)
})

//single note
app.get('/api/notes/:id', (req, res)=>{
    let id = req.params.id;
    const note = notes.find((n)=>n._id === id)
    res.send(note)
    
})

//What is a .env file
// contains secret information related to our app
//like port number
//but to use it you have to install a package called dotenv
//AFTER INSTALLION:
//I want to have port number in dot env so got to .env create PORT = 5000
//In the server.js require dotenv module
//then make an object of it dotenv.config();
//so where you have defined the port use, process.env.PORT
app.listen(PORT, ()=>console.log(`Server up at port: ${PORT} `));