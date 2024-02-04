
const express = require("express")

const app = express()


const farts = require('./apis/fart.json')

const viral = require('./apis/viral.json')

const songs = [
    { id: 1, title: 'Song 1', audioFile: 'https://github.com/Manoj-kumar-C/Storage-of-Meme-App/releases/download/0.1/1.mp3' },
    { id: 2, title: 'NO god plz no', audioFile: 'https://github.com/Manoj-kumar-C/Storage-of-Meme-App/releases/download/0.1/10.mp3' },
    { id: 3, title: 'Song 3', audioFile: 'song3.mp3' },
    { id: 4, title: 'Song 4', audioFile: 'song4.mp3' },
    { id: 5, title: 'Test File', audioFile: 'https://github.com/Manoj-kumar-C/Storage-of-Meme-App/releases/download/0.1/10.mp3' },
  ];




const animals = [
  {
    "id": 1,
    "title": "Song 1",
    "audioFile": "https://github.com/fresh-spar-technologies/Cracked-It/releases/download/0.1/1.Bats.mp3"
  },
  {
    "id": 2,
    "title": "Song 2",
    "audioFile": "https://github.com/fresh-spar-technologies/Cracked-It/releases/download/0.1/2.Coyote.mp3"
  },

]


  const popular = [
    { id: 1, title: 'Song 1', audioFile: 'https://github.com/Manoj-kumar-C/Storage-of-Meme-App/releases/download/0.1/1.mp3' },
    { id: 2, title: 'NO god plz no', audioFile: 'https://github.com/Manoj-kumar-C/Storage-of-Meme-App/releases/download/0.1/10.mp3' },
    { id: 3, title: 'Song 3', audioFile: 'song3.mp3' },
    { id: 4, title: 'Song 4', audioFile: 'song4.mp3' },
  ];

app.get('/', (req, res)=>{ 
    res.json(songs);
    console.log("Works Fine")
})

app.get('/animals', (req, res)=>{ 
  res.json(animals);
  console.log(" Animal Works Fine")
})

app.get('/popular', (req, res)=>{ 
  res.json(popular);
  console.log("Popular Works Fine")
})


app.get('/farts', (req,res)=>{
  res.json(farts);
})


app.get('/viral', (req,res)=>{
  res.json(viral);
})

app.listen(3000, ()=> {console.log("Works at 3000")})