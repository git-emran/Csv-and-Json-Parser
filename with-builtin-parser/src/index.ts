import path from "path";
import { CsvParser } from "./CsvParser";
import { JsonParser } from "./JsonParser";

const jsonPath = path.join(__dirname, "..", "movies.json");
const csvPath = path.join(__dirname, "..", "books.csv");

type Parser = CsvParser | JsonParser;

class Data {
  static fromCSV(csvPath: string) {
    return new Data(new CsvParser(csvPath));
  }

  static fromJson(jsonPath: string) {
    return new Data(new JsonParser(jsonPath));
  }

  public constructor(public parser: Parser) {}
}

const data = Data.fromCSV(csvPath);
data.parser.parse();

const data2 = Data.fromJson(jsonPath);
data2.parser.parse();
