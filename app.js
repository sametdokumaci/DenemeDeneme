const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const app = express()

app.set('view engine', 'ejs')
const port = process.env.PORT || 5000;
const dbURL = 'mongodb+srv://sametdokumaci:5468615000s@deneme.llwy6.mongodb.net/deneme-blog?retryWrites=true&w=majority'
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result => app.listen(port)))
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.render('index', {title: "Anasayfa"})
})
app.get('/anasayfa', (req, res) => {
    res.redirect('/')
})

app.get('/about-us', (req, res) => {
    res.render('about', {title: "Hakkımızda"})
})


