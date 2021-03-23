import React from "react";
import PropTypes from "prop-types";
import './Movie.css';
function Movie({key,year,title,summary,poster,genres}){
    return (
        <div className="movie" key={key}>
             <h4 className="movie__title">{title}</h4>
             <span className="movie__year"><h6>{year}</h6></span>
             <img className="movie__poster"src={poster} alt={title} title={title}></img>
             <div className="movie__genres">{genres.map((genre,i)=>{return <li key={i}>{genre}</li>})}</div>
             <div className="movie__summary">{summary}</div>
        </div>
    )
}
Movie.propTypes={
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes).isRequired
};
export default Movie;