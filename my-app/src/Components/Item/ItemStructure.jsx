import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import axios from "axios";

function ItemStructure(props) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/EditItem/" + props.id);
  };

  const handleAddToBasket = () => {
    axios
      .patch(`http://localhost:8088/item/add/${props.id}/1`)
      .then((res) => {
        console.log(res);
        // window.location.reload();
      })
      .catch((error) => alert('Item has already been added to the basket '));
  };

  const deleteItem = () => {
    axios
      .delete(`http://localhost:8088/item/delete/${props.id}`)
      .then((response) => {
        console.log(response)
        props.getItems();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
    <div style={{ marginLeft: "20px", maxWidth: "20rem", margin: "auto", alignItems: "center" }} className="col">
      <div className="card">
        <div
          style={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "20px",
          }}
          className="card-body"
        >
          <h5 className="card-title">{props.name}</h5>
          <div className="card-text">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">£{props.price}</li>
            </ul>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <button onClick={handleAddToBasket} className="btn btn-success ">Add to Basket</button>
              </li>
              <li className="list-group-item">
                <button
                  style={{  maxWidth: "100%" }}
                  className="btn btn-primary "
                  onClick={handleEdit}
                >
                  Edit Item
                </button>
              </li>
              <li className="list-group-item">
                <button
                  style={{  maxWidth: "100%" }}
                  className="btn btn-danger "
                  onClick={deleteItem}
                >
                  Delete Item
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

ItemStructure.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default ItemStructure;
