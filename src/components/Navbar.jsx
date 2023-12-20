import React, { useEffect, useState } from "react";
import { MobileNav, Typography, IconButton } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from 'axios'

export default function ComponentNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const navList = (
    <ul className="ml-2 mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 justify-end border-b-2">
      <Typography
        as="li"
        variant="small"
        color={hasScrolled ? "red" : "white"}
        className="p-1 font-semibold"
      >
        <a href="/movies" className="flex items-center justify-end  ">
          Movies
        </a>
      </Typography>
    </ul>
  );

  const scrollFunction = () => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = async () => {
    // Add your logic for search click event
    console.log("Search button clicked with term:", searchTerm);
    // You can perform further actions, such as making an API call for search results

    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${searchTerm}&apikey=805151e8`
      );
      const data = await response.json();
      // console.log(data)
      setSearchResults(data);
      window.location.reload()
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="">
      <div
        id="navbar"
        className={`fixed top-0 z-50 h-max w-full rounded-none px-4 lg:px-8 ${
          hasScrolled ? "bg-black text-red-700" : "" // Add styles when scrolled
        } transition-all duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between ml-3">
          <img
            src="logo.png"
            alt="Logo"
            style={{ width: "120px", height: "auto" }}
          />
          <div className="flex items-center gap-4">
            <input
              type="search"
              className="px-2 rounded-sm bg-transparent text-white border border-b-2 border-t-0 border-x-0"
              placeholder="Search Movies"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <Link to={`/movies/search/${searchTerm}`}>
              <a href="#" className="lg:block" onClick={handleSearchClick}>
                <FaSearch color={hasScrolled ? "red" : "white"} />
              </a>
            </Link>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 hover:bg-transparent focus:bg-transparent active:bg-transparent"
              color={hasScrolled ? "red" : "white"}
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </div>
    </div>
  );
}
