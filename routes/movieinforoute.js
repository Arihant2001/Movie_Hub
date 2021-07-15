const express = require('express');
const movieinforouter = express.Router();

const movieinfo = require('../services/movieinfo');
movieinforouter.get('/:id',async function(req,res,next){
    try{
        const data = await movieinfo.getresults(req.params.id);
        //console.log(data);
        let genresarr = [];
        for(let i=0;i<data.genres.length;i++){
            genresarr.push(data.genres[i].name);
        }
        let backgroundurl = 'https://image.tmdb.org/t/p/w185/' + data.backdrop_path;
        res.render('moviefile.ejs',{
            title: data.original_title,
            overview: data.overview,
            rating: data.vote_average,
            genre: genresarr,
            tagline: data.tagline,
            movieurl: backgroundurl
        });
    }
    catch(error){
        console.log(`Error: `,error.message);
        next(error);
    }
});

module.exports = {movieinforouter};