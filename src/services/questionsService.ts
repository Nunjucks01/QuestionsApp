import axios from "axios";
import type { Params, Question } from "@/types";

const BASE_URL = "http://localhost:3000/questions";

export const getQuestions = (params: Params) => {
  return axios.get<Question[]>(BASE_URL, {
    params: {
      _limit: 10,
      ...params,
    },
  });
};

export const getQuestion = (questionsId: number) =>
  axios.get<Question>(`${BASE_URL}/${questionsId}`);

export const createQuestion = (questionName: string, questionType: string) => {
  return axios.post(BASE_URL, {
    title: questionName,
    level: questionType,
  });
};

export const editQuestion = (
  route: number,
  questionName: string,
  questionType: string
) => {
  return axios.patch(`${BASE_URL}/${route}`, {
    title: questionName,
    level: questionType,
  });
};

export const deleteQuestion = (questionId: number) =>
  axios.delete(`${BASE_URL}/${questionId}`);
