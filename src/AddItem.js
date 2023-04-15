import React, { useRef } from "react";
import { FaPlus, FaDownload } from "react-icons/fa";

const AddItem = ({newItem, setNewItem, handleSubmit, handleNewPDF}) => {

    const inputRef = useRef();

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">AddItem</label>
      <input
        autoFocus
        ref={inputRef}
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit" aria-label="Add Item" onClick={() => inputRef.current.focus()}>
        <FaPlus/>
      </button>
      <button type="submit" aria-label="Export PDF" onClick={handleNewPDF}>
        <FaDownload/>
        
        </button>
    </form>
  );
};

export default AddItem;
