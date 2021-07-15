const dotenv = require('dotenv');
const axios = require('axios');

//dotenv.config();

async function getresults(movie_search){
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${movie_search}`;
    //axios.get(url);
    try{
        const response =await axios.get(url);
        if(response.status==200){
            const result =response.data;
            return result;
        }
    }
    catch(error){
        console.log(error);
    };
};

module.exports= {getresults};