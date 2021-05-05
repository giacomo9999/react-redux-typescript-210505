import * as React from "react";

type Props = { saveFruit: (fruit: IFruit | any) => void };

export const AddFruit: React.FC<Props> = ({ saveFruit }) => {
  const [fruit, setFruit] = React.useState<IFruit | {}>();

  const handleFruitData = (e: React.FormEvent<HTMLInputElement>) => {
    setFruit({ ...fruit, [e.currentTarget.id]: e.currentTarget.value });
  };

  const addNewFruit = (e: React.FormEvent) => {
    e.preventDefault();
    saveFruit(fruit);
  };
  return (
    <form onSubmit={addNewFruit} className="Add-fruit">
      <input
        type="text"
        id="fruitName"
        placeholder="Fruit Name"
        onChange={handleFruitData}
      />
    </form>
  );
};
