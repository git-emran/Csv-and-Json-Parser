import { title } from "process";
import { Parser } from "./Parser";

export interface Entry {
  movie_title: string;
  release_date: string;
  genre: string;
}

export class JsonParser extends Parser {
  protected parsedData: Entry[] = [];

  parse(): void {
    (
      JSON.parse(this.data) as [
        {
          movie_title: string;
          release_date: string;
          genre: string;
        },
      ]
    ).map((entry) =>
      this.parsedData.push({
        movie_title: entry.movie_title,
        release_date: entry.release_date,
        genre: entry.genre,
      }),
    );
    console.log(this.parsedData);
  }
}
