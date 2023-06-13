export interface Question {
  id: number;
  title: string;
  level: Level;
}

export interface QuestionCreate {
  title: string;
  level: Level;
}

export interface Params {
  _page: number;
  title_like: string;
  level?: "all" | Level;
}

export enum Level {
  JUNIOR = "junior",
  MIDDLE = "middle",
  SENIOR = "senior",
}
