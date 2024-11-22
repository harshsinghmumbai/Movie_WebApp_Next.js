"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock, Star, ThumbsUp } from "lucide-react";

export function Movie_Card({ data }) {
  console.log("data", data);
  return (
    <>
      {data ? (
        data.map((elem, id) => {
          const {
            poster_path,
            vote_average,
            original_title,
            release_date,
            overview,
            popularity,
          } = elem;
          return (
            <Card className="w-[300px] m-auto overflow-hidden" key={id}>
              <div className="relative">
                <img
                  alt="Inception movie poster"
                  className="w-full h-[200px] object-fill"
                  height="200"
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  style={{
                    aspectRatio: "400/200",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-yellow-500 text-black">
                    <Star className="w-4 h-4 mr-1" />
                    {vote_average}
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold">{original_title}</h2>
                    <p className="text-sm text-muted-foreground flex items-center mt-1">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      {release_date}
                    </p>
                  </div>
                  <Badge variant="outline" className="ml-2">
                    Sci-Fi
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-muted-foreground">{overview}</p>
                <div className="flex items-center mt-4 space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" /> 148 min
                  </span>
                  <span className="flex items-center">
                    <ThumbsUp className="w-4 h-4 mr-1" /> {popularity}
                  </span>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <div className="flex space-x-2 w-full">
                  <Button className="flex-1">Watch Trailer</Button>
                  <Button variant="outline" className="flex-1">
                    Add to Watchlist
                  </Button>
                </div>
              </CardFooter>
            </Card>
          );
        })
      ) : (
        <p className="">Movie are not available</p>
      )}
    </>
  );
}
