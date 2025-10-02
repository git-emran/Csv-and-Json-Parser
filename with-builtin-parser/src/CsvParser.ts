import { Parser } from "./Parser";

export class CsvParser extends Parser {
  public super(path: string) {}
  protected parsedData: string[] = [];

  parse() {
    this.data.split("\n").map((entry) => this.parsedData.push(entry));
    console.log(this.parsedData);
  }
}
