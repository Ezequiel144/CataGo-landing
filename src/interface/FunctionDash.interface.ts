export interface PropCardMenu {
  id: string;
  index: number;
  isSelect: number;
  setIsSelect: (x: number) => void;
  icon: string;
  name: string;
}

export interface PropCardDash {
  id: string;
  index: number;
  isSelect: number;
  img: string;
  description: string;
}
