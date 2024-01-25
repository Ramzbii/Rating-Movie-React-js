import axios from "axios";

const apiKey=process.env.REACT_APP_KEY;
const baseurl=process.env.REACT_APP_BASEURL;
export const getMovieList = async() =>{
    const movie = await axios.get(`${baseurl}/movie/popular?api_key=${apiKey}`)
    // console.log({movieList : movie})
    return movie.data.results
}

export const searchMovie = async (q) => {
    const search = await axios.get(`${baseurl}/search/movie?query=${q}&api_key=${apiKey}`)
   return search.data
}