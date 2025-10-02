export type TokenType =
  | "BraceOpen"
  | "BraceClose"
  | "BracketOpen"
  | "BracketClose"
  | "String"
  | "Number"
  | "Comma"
  | "Colon"
  | "True"
  | "False"
  | "Null";

export interface Token {
  type: TokenType;
  value: string;
}

export type ASTNode =
  | { type: "Object"; value: { [key: string]: ASTNode } }
  | { type: "Array"; value: ASTNode[] };
