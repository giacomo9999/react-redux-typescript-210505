import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

type Props = { fruit: IFruit; removeFruit: (fruit: IFruit) => void };

export const Fruit: React.FC<Props> = ({ fruit, removeFruit }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteFruit = React.useCallback(
    (fruit: IFruit) => dispatch(removeFruit(fruit)),
    [dispatch, removeFruit]
  );

  return (
    <div className="Fruit">
      <div>
        <h1>{fruit.fruitName}</h1>
        <h3>{fruit.fruitColor}</h3>
      </div>
      <button onClick={() => deleteFruit(fruit)}>Remove</button>
    </div>
  );
};
