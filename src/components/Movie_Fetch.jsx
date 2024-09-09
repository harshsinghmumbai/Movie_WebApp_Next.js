"use client";
import { useState } from "react";

const Movie_Fetch = () => {
  const [page, setPage] = useState(1);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjg2ODA4ZGVlYmRjZmFkM2I3Yjc2YTAyZDE2MjE5YyIsIm5iZiI6MTcyNTYxODU2Ny4xMjkyNTMsInN1YiI6IjY2NGUyYjYyMWU1NzA1OTU2MWNhYWJiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KlN1WKwzOrgRQmlZ2Gxd-wVFDk6OjtMuD60kONrIrCo",
    },
  };
  async function fetchMovies() {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc",
        options
      );
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }

  fetchMovies();

  return (
    <>
      <div className="">Movie_Fetch</div>
    </>
  );
};

export default Movie_Fetch;
