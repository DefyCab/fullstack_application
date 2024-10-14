import express from "express"
const port = 8080
const app = express()

app.get('/', (req, res) => {
  res.send('Welcome to Anagram paradise!"')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})