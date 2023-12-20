import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import axios from "axios";

export default function DetailMovies({ id }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://www.omdbapi.com/?i=${id}&apikey=805151e8`
      );

      console.log(response.data);
      setMovies(response.data || []);
    };

    fetchData();
  }, []);
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="w-full max-w-[48rem] flex border p-10 rounded-lg ">
        <div
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none "
        >
          <img
            src={movies.Poster}
            alt={movies.Title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="pl-6">
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            {movies.Title} {movies.Year}
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {movies.Genre} 
          </Typography>
          <Typography variant="h4" color="gray" className="mb-2">
            {movies.imdbRating}
          </Typography>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            {movies.Rated}
          </Typography>
          <Typography color="gray" className="mb-8 font-normal text-justify">
            {movies.Plot}
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            {movies.Actors}
          </Typography>
        </div>
      </div>
    </div>
  );
}
