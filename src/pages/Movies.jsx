import React from "react";
import ComponentNavbar from "../components/Navbar";
import AllMovies from "../components/AllMovies";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-black">
      <ComponentNavbar />
      <AllMovies />
      <Footer />
    </div>
  );
}
