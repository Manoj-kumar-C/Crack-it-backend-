
const express = require("express")

const app = express()

const songs = [
    { id: 1, title: 'Song 1', audioFile: 'https://github.com/Manoj-kumar-C/Storage-of-Meme-App/releases/download/0.1/1.mp3' },
    { id: 2, title: 'NO god plz no', audioFile: 'https://github.com/Manoj-kumar-C/Storage-of-Meme-App/releases/download/0.1/10.mp3' },
    { id: 3, title: 'Song 3', audioFile: 'song3.mp3' },
    { id: 4, title: 'Song 4', audioFile: 'song4.mp3' },
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
  {
    "id": 3,
    "title": "Song 3",
    "audioFile": "https://github.com/fresh-spar-technologies/Cracked-It/releases/download/0.1/3.Dog.mp3"
  },
  {
    "id": 4,
    "title": "Song 4",
    "audioFile": ""
  },
  {
    "id": 5,
    "title": "Song 5",
    "audioFile": ""
  },
  {
    "id": 6,
    "title": "Song 6",
    "audioFile": ""
  },
  {
    "id": 7,
    "title": "Song 7",
    "audioFile": ""
  },
  {
    "id": 8,
    "title": "Song 8",
    "audioFile": ""
  },
  {
    "id": 9,
    "title": "Song 9",
    "audioFile": ""
  },
  {
    "id": 10,
    "title": "Song 10",
    "audioFile": ""
  },
  {
    "id": 11,
    "title": "Song 11",
    "audioFile": ""
  },
  {
    "id": 12,
    "title": "Song 12",
    "audioFile": ""
  },
  {
    "id": 13,
    "title": "Song 13",
    "audioFile": ""
  },
  {
    "id": 14,
    "title": "Song 14",
    "audioFile": ""
  },
  {
    "id": 15,
    "title": "Song 15",
    "audioFile": ""
  },
  {
    "id": 16,
    "title": "Song 16",
    "audioFile": ""
  },
  {
    "id": 17,
    "title": "Song 17",
    "audioFile": ""
  },
  {
    "id": 18,
    "title": "Song 18",
    "audioFile": ""
  },
  {
    "id": 19,
    "title": "Song 19",
    "audioFile": ""
  },
  {
    "id": 20,
    "title": "Song 20",
    "audioFile": ""
  },
  {
    "id": 21,
    "title": "Song 21",
    "audioFile": ""
  },
  {
    "id": 22,
    "title": "Song 22",
    "audioFile": ""
  },
  {
    "id": 23,
    "title": "Song 23",
    "audioFile": ""
  },
  {
    "id": 24,
    "title": "Song 24",
    "audioFile": ""
  },
  {
    "id": 25,
    "title": "Song 25",
    "audioFile": ""
  }
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

app.listen(3000, ()=> {console.log("Works at 300")})