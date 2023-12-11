import React from "react";
import ComponentNavbar from "../components/Navbar";
import MoviesList from "../components/MovieList";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-black">
      <ComponentNavbar />
      <MoviesList />
      <Footer />
    </div>
  );
}
