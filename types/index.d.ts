declare type IGame = {
  id: string;
  title: string;
  description: string[];
  gameMechanic: {
    type: string;
    configuration: {
      headline: string;
      label?: string;
      correctAnswer?: string;
      answers?: { label: string; value: string | number }[];
    };
  };
};
