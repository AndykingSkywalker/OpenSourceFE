import React, { useState, useEffect } from "react";
import axios from "axios";
import { clear } from "@testing-library/user-event/dist/clear";

function BasketsDisplay() {
  const [baskets, setBaskets] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8088/basket/get")
      .then(response => setBaskets(response.data))
      .catch(error => console.error(error));
  }, []);

  const deleteBasket = () => {
    axios
    .delete(`http://localhost:8088/basket/delete/1`)
    .then(() => {
    })
  };

  function clearItems(){
    baskets.slice(0, baskets.length);
  }


  const calculateTotalPrice = (items) => {
    if (!items || items.length === 0) {
      return "0.00";
    }

    let total = items.reduce((total, item) => total + item.price, 0);

    return total.toFixed(2);
  };

  return (
    <div>
      <div className="card" style={{ padding: "10px" }}>
        <div className="card border-dark mb-3" style={{ textAlign: "center" }}>
          <div className="card-body">
          {baskets.map(basket => (
            <div className="card-title" key={basket.id}>
              <h3>{basket.name}</h3>
              <div>
              <ul className="list-group list-group-flush">
              <li className="list-group-item">
              {basket.items.map(basketItem => (
                  <div key={basketItem.id}>
                    {basketItem.name} - Price: £{basketItem.price} 
                  </div>
                ))}
              </li>
                </ul>
                <br/>
              </div>
              <p>Total Price: £{calculateTotalPrice(basket.items)}</p>
            </div>
          ))}


          </div>
         <button onClick={clearItems} className="btn btn-danger ">Clear Items</button>
        </div>
      </div>
    </div>

  );
}

export default BasketsDisplay;
