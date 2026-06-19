import vegetables from "../data/vegetables";
import VegetablePresenter from "./VegetablePresenter";

function VegetableContainer() {

  return (
    <VegetablePresenter
      vegetables={vegetables}
    />
  );
}

export default VegetableContainer;