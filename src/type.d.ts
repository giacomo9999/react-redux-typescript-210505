interface IFruit {
  id: number;
  fruitName: string;
  fruitColor: string;
}

type fruitsState = {
  fruits: IFruit[];
};

type FruitAction = {
  type: string;
  fruit: IFruit;
};

type DispatchType = (args: FruitAction) => FruitAction;
