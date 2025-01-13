export interface PropCardFac {
  index: number;
  isActive: number | null;
  setIsActive: (x: number | null) => void;
  question: string;
  response: string;
}
