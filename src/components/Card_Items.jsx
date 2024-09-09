"use client";

import Link from "next/link";

const Card_Items = ({ movies }) => {
  console.log("card", movies);
  return (
    <>
      <div className="sm:grid sm:grid-cols-2 sm:gap-2 lg:grid lg:grid-cols-3 lg:gap-4 xl:grid xl:grid-cols-4 xl:gap-3 z-0">
        {movies.map((items, id) => {
          const { Poster, Title, imdbID } = items;
          return (
            <Link
              href={`/edit/${imdbID}`}
              className="overflow-hidden rounded-xl"
            >
              <div className="relative h-[400px] w-[300px] rounded-xl hover:scale-125 duration-500">
                <img
                  src={Poster}
                  alt="Movies"
                  className="z-0 h-full w-full rounded-xl object-cover hover:rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left rounded-xl">
                  <h1 className="text-lg font-semibold text-white">{Title}</h1>
                  <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    Read More &rarr;
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Card_Items;
