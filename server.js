const express = require('express')
const app = express()

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];


// Exercise 1 Be Polite, Greet the User

app.get('/greetings/:name', (req, res) => {
    const name = req.params.name
    res.send(`Hello there, ${name}!`)
})

// Exercise 2 Rolling the Dice

app.get('/roll/:number', (req, res) => {
    const number = (req.params.number)
    if (isNaN(number)) {
        res.send('You must specify a number.')
    } else {
        const randomNumber = Math.floor(Math.random() * (number + 1))
        res.send(`You rolled a ${randomNumber}.`)
    }
}) 

// Exercise 3 I Want THAT One !

app.get('/collectibles/:index', (req, res) => {
    const index = (req.params.index)
    if (isNaN(index)) {
        res.send('This item is not yet in stock. Check back soon!')
    } else {
        const collectible = collectibles[index]
        res.send(`So, you want the ${collectible.name}? For ${collectible.price}, it can be yours!`)
    }
})

// Exercise 4 











app.listen(3000, () => {
    console.log('Listening on port 3000 ')
})