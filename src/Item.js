import React from "react";
import { FaTrash } from "react-icons/fa";

const Item = ({item, handleDelete}) => {
  return (
    <li className="item">
      <label>{item.name}</label>
      <FaTrash
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${item.item}`}
      ></FaTrash>
    </li>
  );
};

export default Item;
