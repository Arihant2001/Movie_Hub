const express = require('express');
const app = express();
const hbs = express();
const cors = require('cors');
const path = require('path');
//const dotenv = require('dotenv');
//dotenv.config();
const {movieRouter} = require('./routes/movie_search');
const {movieinforouter} = require('./routes/movieinforoute');

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

app.use(cors());
app.set('view engine','ejs');
app.set('views', path.join(__dirname + '/views/layout'));

app.use(express.static(path.join(__dirname, '/public')))

app.get('/',(req,res) => {
    res.render('home.ejs');
});

app.use('/movie_search',movieRouter);
app.use('/result',movieinforouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT,() => {
    console.log(`App running at: http://localhost:${PORT})`)
});