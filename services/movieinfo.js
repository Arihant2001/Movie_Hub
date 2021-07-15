const express = require('express');
const dotenv = require('dotenv');
//dotenv.config();
const axios = require('axios');

async function getresults(movieid){
    const url = `https://api.themoviedb.org/3/movie/${movieid}?api_key=${process.env.API_KEY}&language=en-US`;
    try{
        const response = await axios.get(url);
        if(response.status == 200){
            return response.data;
        }
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {getresults};