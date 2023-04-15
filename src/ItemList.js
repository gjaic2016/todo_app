import React from "react";
import Item from "./Item";

const ItemList = ({ items, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ItemList;
