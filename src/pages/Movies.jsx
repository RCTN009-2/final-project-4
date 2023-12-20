import React from "react";
import ComponentNavbar from "../components/Navbar";
import AllMovies from "../components/AllMovies";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

export default function Movies() {
  const {searchTerm} = useParams()

  return (
    <div className="bg-black">
      <ComponentNavbar />
      <AllMovies judul={searchTerm}  />
      <Footer />
    </div>
  );
}
