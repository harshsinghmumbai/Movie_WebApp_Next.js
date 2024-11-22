"use client";
import { useState, useEffect } from "react";
import { Movie_Card } from "./Movie_Card";
import { useInView } from "react-intersection-observer";
import { Fetch_Movies } from "@/actions/fetch_movie";

const Load_More = () => {
  const [data, setdata] = useState([]);
  const { ref, inView } = useInView();
  const [PageLoad, setPageLoad] = useState(1);

  const loadMoreMovies = async () => {
    const newPage = PageLoad + 1;
    const newMoviesData = await Fetch_Movies(newPage);
    setdata((prevMovieData) => [...prevMovieData, ...newMoviesData]);
    setPageLoad(newPage);
  };

  useEffect(() => {
    if (inView) {
      loadMoreMovies();
    }
  }, [inView]);
  return (
    <>
      <div className="sm:grid lg:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        <Movie_Card data={data} />
      </div>
      <div
        className="flex justify-center items-center w-full mx-auto"
        ref={ref}
      >
        <div className="h-8 my-3 w-8 inline-block rounded-full border-4 border-solid dark:border-r-white border-r-black animate-spin"></div>
      </div>
    </>
  );
};

export default Load_More;
