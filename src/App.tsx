import * as React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { Fruit } from "./components/Fruit";
import { AddFruit } from "./components/AddFruit";
import { addFruit, removeFruit } from "./store/actionCreators";
import { Dispatch } from "redux";

const App: React.FC = () => {
  const fruits: readonly IFruit[] = useSelector(
    (state: FruitsState) => state.fruits,
    shallowEqual
  );
  const dispatch: Dispatch<any> = useDispatch();
  const saveFruit = React.useCallback(
    (fruit: IFruit) => dispatch(addFruit(fruit)),
    [dispatch]
  );

  return (
    <main>
      <div className="container-outer">
        <h2>FRUITS</h2>
        <AddFruit saveFruit={saveFruit} />
        {fruits.map((fruit: IFruit) => (
          <Fruit key={fruit.id} fruit={fruit} removeFruit={removeFruit} />
        ))}
      </div>
    </main>
  );
};

export default App;
