import React from "react";
import ItemList from "./ItemList";

const Content = ({ items, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleDelete={handleDelete}
        />
      ) : (
        <p>The list is empty</p>
      )}
    </main>
  );
};

export default Content;
