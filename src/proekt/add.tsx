import { useState } from "react";
import axios from "axios";
import "./add.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  function add(e) {
    e.preventDefault();

    if (!query.trim()) {
      console.log("Please enter a movie name");
      return;
    }

    axios
      .get(`https://www.omdbapi.com/?apikey=17dec6d0&s=${query}`)
      .then((response) => {
        const data = response.data;
        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setMovies([]);
          alert("Movie not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  return (
    <div>
      <h2>Movie Search</h2>
      <form className="form" onSubmit={add}>
        <input
          className="input"
          type="text"
          placeholder="Enter movie name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="but" type="submit">
          Search
        </button>
      </form>
      <div className="full">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID} className="container">
              <img className="img" src={movie.Poster} alt={movie.Title} />
              <h2>{movie.Title}</h2>
              <p>
                ({movie.Year}) | {movie.Type}
              </p>
            </div>
          ))
        ) : (
          <p>No movies found. Please try again.</p>
        )}
      </div>
    </div>
  );
}