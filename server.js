const express = require('express');
const movieData = require('./movies.json');

const port =process.PORT || 3001;

const app = express();

app.get('/movieList', (req,res) => {

const data = [];
 movieData.movies.forEach( movie => data.push(movie.Title));
 res.send(data);
})

app.listen(port || '3000', () => console.log('port is up'));