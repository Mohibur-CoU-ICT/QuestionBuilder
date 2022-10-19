import { QuestionForm } from "./QuestionForm";

export interface Form {
  id: number;
  name: string;
  created_on: string;
  updated_on: string;
  description: string;
  questions: QuestionForm[];
};
