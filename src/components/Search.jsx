import { Button, Card, Input, Typography } from "@material-tailwind/react";
import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="w-full max-w-[48rem] flex border border-red-500 p-10 rounded-lg items-center">
        <Input
          size="lg"
          placeholder="Search your movie"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <a href="#" className="lg:block ml-4 p-3 rounded-lg bg-red-600 shadow-lg shadow-white-500/50">
          <FaSearch color="black" />
        </a>
        {/* <Button className="ml-4 bg-red-500">Search</Button> */}
        {/* <div>
            <button className="bg-red-500 border ml-4 justify-center flex">Search</button>
        </div> */}
      </div>
    </div>
  );
}
