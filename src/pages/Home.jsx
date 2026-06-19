import VegetableContainer from "../components/VegetableContainer";
import SearchBar from "../components/SearchBar";
import {Link} from "react-router-dom";

function Home() {
  return (
    <div>
      <h1 className="title"> Fresh Vegetables Market</h1>
      <SearchBar />
      <VegetableContainer />
    </div>
  );
}

export default Home;