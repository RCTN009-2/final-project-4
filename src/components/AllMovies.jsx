import React, { useState, useEffect } from "react";
import "../index.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Carousel,
} from "@material-tailwind/react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AllMovies() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [movies, setMovies] = useState([]);

  const handleNextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const handlePrevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

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
    <div className="mx-auto bg-black pt-20 h-full">
      <div className="py-4">
        <Typography
          variant="h3"
          className="text-white text-center font-normal mb-8 pl-4"
        >
          Recomendation Movies
        </Typography>
        <div className=" pl-2">
          <div className="flex lg:pl-10 justify-center lg:justify-start">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 overflow-y-hidden overflow-x-hidden">
              {Object.values(movies).map((movie) => (
                <div key={movie.imdbID} className="w-96">
                  <div className="relative h-96">
                    <Link to={`/movies/${movie.imdbID}`}>
                      <img
                        src={movie.Poster}
                        alt={movie.Title}
                        className="h-full w-full lg:w-80 object-cover px-0 lg:px-0 pb-10"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
