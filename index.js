
const express = require("express")

const app = express()
const cors = require('cors');
app.use(cors());
// Apis JSONS imports 
const farts = require('./apis/fart.json')

const viral = require('./apis/viral.json')

const popular1 = require('./apis/popular(1).json')

const popular2 = require('./apis/popular(2).json')

const cartoon = require('./apis/cartoon.json')

const animals = require('./apis/animals.json')
app.get('/', (req, res)=>{ 
    res.json(farts);
    console.log("Works Fine")
})

app.get('/popular1', (req, res)=>{ 
  res.json(popular1);
  console.log("Works Fine")
})

app.get('/animals', (req, res)=>{ 
  res.json(animals);
  console.log(" Animal Works Fine")
})


app.get('/youtube', (req, res)=>{ 
  res.json(popular1);
  console.log("Popular Works Fine")
})

app.get('/youtube2', (req, res)=>{ 
  res.json(popular2);
  console.log("Popular Works Fine")
})




app.get('/farts', (req,res)=>{
  res.json(farts);
  console.log("Viral Works  Fine");
})


app.get('/viral', (req,res)=>{
  res.json(viral);
})

app.get('/movie', (req, res)=>{ 
  res.json(popular1);
  console.log("Works Fine")
})


app.get('/cartoon', (req, res)=>{ 
  res.json(cartoon);
  console.log("Works Fine")
})

app.listen(3000, ()=> {console.log("Works at 3000")})