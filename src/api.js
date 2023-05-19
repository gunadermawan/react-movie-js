import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASE_URL

export const getMovieList = async() => {
    const movie = axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`)
    return (await movie).data.results
}

export const searchMovie = async (q) => {
    const search = axios.get(q)
    return 
}