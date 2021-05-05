interface IFruit {
  id: number;
  fruitName: string;
  fruitColor: string;
}

type FruitsState = {
  fruits: IFruit[];
};

type FruitAction = {
  type: string;
  fruit: IFruit;
};

type DispatchType = (args: FruitAction) => FruitAction;
