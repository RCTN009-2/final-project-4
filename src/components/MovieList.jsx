import React, { useEffect, useState } from "react";
import { Carousel } from "@material-tailwind/react";
import axios from "axios";
import "../index.css";
import { Link } from "react-router-dom";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://www.omdbapi.com/?s=Batman&apikey=805151e8&page=1"
        );

        console.log(response.data);
        // Assuming the response contains an array of movies
        setMovies(response.data.Search || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto bg-black h-full">
      <div className="relative">
        <img
          className="w-full h-screen object-cover object-center"
          src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2019/11/hipertextual-si-te-vas-netflix-no-olvides-descargar-mi-actividad-mi-lista-2019814675.jpg?w=1500&quality=50&strip=all&ssl=1"
          alt="background"
        />
        <div className="shaded-overlay"></div>
      </div>
      <div className="py-8 h-full">
        <p className="text-white pb-2 font-medium lg:pl-10 text-center lg:text-start">
          Recommendation Movies
        </p>
        <div className="flex lg:pl-10 justify-center lg:justify-start">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 overflow-x-hidden">
            {Object.values(movies)
              .slice(0, 4)
              .map((movie) => (
                <div key={movie.imdbID} className="w-96">
                  <div className="relative h-96">
                    <Link to={`/movies/${movie.imdbID}`}>
                      <img
                        src={movie.Poster}
                        alt={movie.Title}
                        className="h-full w-full lg:w-80 object-cover px-0 lg:px-0"
                      />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
