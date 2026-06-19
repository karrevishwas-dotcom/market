import VegetableCard from "./VegetableCard";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function VegetablePresenter({
  vegetables
}) {

  const { search } =
    useContext(CartContext);

  let displayVegetables =
    vegetables;

  if (search !== "") {

    displayVegetables =
      vegetables.sort((a, b) => {

        if (
          a.name.toLowerCase() === search
        )
          return -1;

        if (
          b.name.toLowerCase() === search
        )
          return 1;

        return 0;
      });
  }

  return (
    <div className="card-container">

      {displayVegetables.map(
        (veg) => (
          <VegetableCard
            key={veg.id}
            veg={veg}
          />
        )
      )}

    </div>
  );
}

export default VegetablePresenter;