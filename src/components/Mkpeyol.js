import React, {useState} from "react";

export default function Mkpeyol({ mkpeyol }) {
  const [quantity, setquantity] = useState(1)
  return (
    <div className="m-2 shadow-lg p-3 mb-5 bg-white rounded">
      <img
        src={mkpeyol.image}
        className="img-fluid"
        style={{ height: "200px", width: "200px" }}
        alt={mkpeyol.name}
      />
      <div>
        <h1 className="mkpeyol-name">{mkpeyol.name}</h1>
        <div className="mkpeyol-description">{mkpeyol.description}</div>
        <div
          className="price-quantity-container">
          <div className="w-100 m-1">
            <p style={{ marginBottom: "2px" }}>Price</p> {/* Reduce space below "Price" */}
            <span className="price-form">{mkpeyol.price * quantity}</span> {/* Wrap price in a span for better control */}
          </div>
          <div className="w-100 m-1">
            <p style={{ marginBottom: "2px" }}>Quantity</p> {/* Reduce space below "Quantity" */}
            <select value={quantity} onChange={(e)=>{setquantity(e.target.value)}} className="form-control">
              {[...Array(10)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div>
        <button className="btn">ORDER NOW</button>
      </div>
    </div>
  );
}
