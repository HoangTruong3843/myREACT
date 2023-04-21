import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { fetchMovie } from "../actions/movieActions";
import MovieDetail from "../components/moviedetail"

function Movie(props) {
    const [selectedMovie] = useState(props.selectedMovie);
    const params = useParams();
    const Movie_ID = params.Movie_ID;
    console.log(Movie_ID);
    const dispatch = useDispatch();
    if (selectedMovie == null) {
        dispatch(fetchMovie(Movie_ID));
    }

    return (<MovieDetail Movie_ID={Movie_ID} />)
}

export default Movie;
