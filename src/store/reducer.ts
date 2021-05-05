import * as actionTypes from "./actionTypes";

const initialState: FruitsState = {
  fruits: [
    {
      id: 1,
      fruitName: "Mango",
      fruitColor: "Orange",
    },
    {
      id: 2,
      fruitName: "Plum",
      fruitColor: "Purple",
    },
  ],
};

const reducer = (
  state: FruitsState = initialState,
  action: FruitAction
): FruitsState => {
  switch (action.type) {
    case actionTypes.ADD_FRUIT:
      const newFruit: IFruit = {
        id: Date.now(),
        fruitName: action.fruit.fruitName,
        fruitColor: action.fruit.fruitColor,
      };
      return { ...state, fruits: state.fruits.concat(newFruit) };
    case actionTypes.REMOVE_FRUIT:
      const filteredFruits: IFruit[] = state.fruits.filter(
        (fruit) => fruit.id !== action.fruit.id
      );
      return { ...state, fruits: filteredFruits };
    default:
      return state;
  }
};

export default reducer;
