import React from "react";
import ComponentNavbar from "../components/Navbar";
import DetailMovies from "../components/DetailMovies";
import Search from "../components/Search";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

export default function MoviesDetail() {
  const { imdbID } = useParams();
  return (
    <div className="bg-black">
      <ComponentNavbar />
      <DetailMovies id={imdbID} />
      {/* <Search /> */}
      <Footer />
    </div>
  );
}
