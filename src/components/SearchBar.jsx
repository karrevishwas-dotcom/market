import { useRef, useContext } from "react";
import { CartContext } from "../context/CartContext";
import vegetables from "../data/vegetables";

function SearchBar() {

  const searchRef = useRef();

  const { setSearch } =
    useContext(CartContext);

  const handleSearch = () => {

    const value =
      searchRef.current.value
      .trim()
      .toLowerCase();

    const found =
      vegetables.find(
        (veg) =>
          veg.name.toLowerCase() === value
      );

    if (found) {
      setSearch(value);
    } else {
      alert(
        "Vegetable is Out of Stock!"
      );

      setSearch("");
    }

    searchRef.current.value = "";
  };

  return (
    <div
      style={{
        textAlign: "center",
        margin: "20px"
      }}
    >

      <input
        type="text"
        ref={searchRef}
        placeholder="Search Vegetable"
      />

      <button
        onClick={handleSearch}
      >
        Search
      </button>

    </div>
  );
}

export default SearchBar;