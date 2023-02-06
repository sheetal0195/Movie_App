import React from "react";

const img_API = "https://image.tmdb.org/t/p/w1280";
const MovieCard = ({ poster_path, title, overview, vote_average }) => {
  return (
    <div className="movie">
      <img src={img_API + poster_path} alt={title} />
      <div className="movie_info">
        <h4>{title}</h4>
        <span>{vote_average}</span>
      </div>
      <div className="movie_overview">
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};
export default MovieCard;
