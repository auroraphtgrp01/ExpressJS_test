import express from 'express'

const app = express()

const PORT = 4000

app.use(express.json())
app.post('/', (req, res) => {
  res.json(req.body)

})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})