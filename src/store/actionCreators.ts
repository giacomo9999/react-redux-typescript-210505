import * as actionTypes from "./actionTypes";

export const addFruit = (fruit: IFruit) => {
  const action: FruitAction = { type: actionTypes.ADD_FRUIT, fruit };
  return simulateHttpRequest(action);
};

export const removeFruit = (fruit: IFruit) => {
  const action: FruitAction = { type: actionTypes.REMOVE_FRUIT, fruit };
  return simulateHttpRequest(action);
};

export const simulateHttpRequest = (action: FruitAction) => {
  return (dispatch: DispatchType) => {
    setTimeout(() => dispatch(action), 500);
  };
};
