import React from "react";
import { Typography } from "@material-tailwind/react";

export default function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 py-6 text-center md:justify-between">
      <Typography variant="h8" color="gray" className="font-normal pl-12">
        &copy; RCTN009-2
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 pr-12">
        <li>
          <Typography
            variant="h8"
            as="a"
            href="#"
            color="gray"
            className="font-normal transition-colors hover:text-red-500 focus:text-red-500"
          >
            Home
          </Typography>
        </li>
        <li>
          <Typography
            variant="h8"
            as="a"
            href="#"
            color="gray"
            className="font-normal transition-colors hover:text-red-500 focus:text-red-500"
          >
            Movies
          </Typography>
        </li>
      </ul>
    </footer>
  );
}
