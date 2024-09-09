"use client";
import Card_Items from "@/components/Card_Items";
import { Input } from "@/components/ui/input";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setmovies] = useState([]);
  const [loading, setloading] = useState(true);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjg2ODA4ZGVlYmRjZmFkM2I3Yjc2YTAyZDE2MjE5YyIsIm5iZiI6MTcyNTYxODU2Ny4xMjkyNTMsInN1YiI6IjY2NGUyYjYyMWU1NzA1OTU2MWNhYWJiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KlN1WKwzOrgRQmlZ2Gxd-wVFDk6OjtMuD60kONrIrCo",
    },
  };

  async function getMoviedata() {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=2&sort_by=popularity.desc",
        options
      );
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getMoviedata();
  }, []);
  return (
    <>
      <h1 className="text-xl hover:underline hover:underline-offset-2 hover:decoration-1 font-semibold text-center md:tracking-wide">
        Search Your Favorite Movie
      </h1>
      <div className="mt-4 w-[80%] m-auto md:w-[320px] relative mb-5">
        <Input placeholder="Enter Movie Name" className="text-base px-9" />
        <IoSearch className="text-xl absolute top-[9px] left-[7px] text-gray-600" />
      </div>
      <Card_Items movies={movies} />
    </>
  );
}
