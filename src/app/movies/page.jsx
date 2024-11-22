import { Fetch_Movies } from "@/actions/fetch_movie";
import Load_More from "@/components/Load_More";
import { Movie_Card } from "@/components/Movie_Card";

const movies = async () => {
  const data = await Fetch_Movies(1);
  return (
    <>
      <div className="sm:grid lg:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        <Movie_Card data={data} />
      </div>
      <Load_More />
    </>
  );
};

export default movies;
