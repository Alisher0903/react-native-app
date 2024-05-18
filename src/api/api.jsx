import axios, { isCancel, AxiosError } from 'axios';
import { token } from "../constants/constanta";

const base_url = 'https://api.themoviedb.org/3';

// url
const discoverMovie = `${base_url}/discover/movie`;
const upcomingMovie = `${base_url}/movie/upcoming`;
const topRatedMovie = `${base_url}/movie/top_rated`;
const popularMovie = `${base_url}/movie/popular`;

// detail url
const movieDetail = id => `${base_url}/movie/${id}`;
const movieCredits = id => `${base_url}/movie/${id}/credits`;
const movieSimilar = id => `${base_url}/movie/${id}/similar`;

// get descovery
export const getDescovery = async (setMovieData, setIsLoading) => {
    await axios.get(discoverMovie, token)
        .then(res => {
            setIsLoading(false)
            setMovieData(res.data.results)
        })
        .catch(error => {
            setIsLoading(true)
            console.log("error", error)
        })
}

// get upcoming
export const getUpcoming = async (setMovieData) => {
    await axios.get(upcomingMovie, token)
        .then(res => setMovieData(res.data.results))
        .catch(error => console.log("error", error))
}
// get topRated
export const getTopRated = async (setMovieData) => {
    await axios.get(topRatedMovie, token)
        .then(res => setMovieData(res.data.results))
        .catch(error => console.log("error", error))
}

// get popular
export const getPopular = async (setMovieData) => {
    await axios.get(popularMovie, token)
        .then(res => setMovieData(res.data.results))
        .catch(error => console.log("error", error))
}

// get detail
export const getDetail = async (setDetail, id) => {
    await axios.get(movieDetail(id), token)
        .then(res => setDetail(res.data.results))
        .catch(error => console.log("error", error))
}

// img url
export const image500 = posterPath => {
    return posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : null;
}
export const image342 = posterPath => {
    return posterPath ? `https://image.tmdb.org/t/p/w342${posterPath}` : null;
}
export const image185 = posterPath => {
    return posterPath ? `https://image.tmdb.org/t/p/w185${posterPath}` : null;
}