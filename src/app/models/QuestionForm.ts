export interface QuestionForm {
  name: string;
  type: string;
  active: boolean;
  options: string[];
  lowerRange: number;
  upperRange: number;
  leftLabel: string;
  rightLabel: string;
  allowedFileTypes: string[];
  maximumFileSize: string;
};
