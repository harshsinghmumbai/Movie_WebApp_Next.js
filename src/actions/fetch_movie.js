"use server";

export async function Fetch_Movies(page) {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjg2ODA4ZGVlYmRjZmFkM2I3Yjc2YTAyZDE2MjE5YyIsIm5iZiI6MTcyNzYyMDQ2OC4xNTE0NTIsInN1YiI6IjY2NGUyYjYyMWU1NzA1OTU2MWNhYWJiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TxnvlPeGvi0Z11ofxsAhkGxwwjQ9QKUiKGb32MaqBYY",
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
      options
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error in Fetching Movie", error);
  }
}
