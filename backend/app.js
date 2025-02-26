import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()

const PORT = process.env.PORT || 5000

app.get('/members', (req, res) => {
  res.status(200).json({"members": ["Alice", "Bob", "Charlie"]})
})

app.get("/upcommingevents" , (req , res) => {
    res.status(200).json({"events": ["Event1", "Event2"]})
})

app.get("/pastevents", (req , res) => {
  res.status(200).json({"pastevents": ["past event", "past event2"]})
})

app.get("/positions", (req , res) => {

})




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})