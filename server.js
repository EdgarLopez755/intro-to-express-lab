const express = require('express')
const app = express()

// Excercise 1 Be Polite, Greet the User
app.get('/greetings/:name', (req, res) => {
    const name = req.params.name
    res.send(`Hello there, ${name}!`)
})







app.listen(3000, () => {
    console.log('Server listening on port 3000')
})