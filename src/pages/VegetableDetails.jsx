import { useParams } from "react-router-dom";

function VegetableDetails() {
  const { id } = useParams();

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>🥕 Vegetable Details</h1>

      <h2>Vegetable ID: {id}</h2>

      {id === "1" && (
        <>
          <h3>Tomato</h3>
          <p>Price: ₹30/kg</p>
        </>
      )}

      {id === "2" && (
        <>
          <h3>Potato</h3>
          <p>Price: ₹25/kg</p>
        </>
      )}

      {id === "3" && (
        <>
          <h3>Carrot</h3>
          <p>Price: ₹40/kg</p>
        </>
      )}
    </div>
  );
}

export default VegetableDetails;