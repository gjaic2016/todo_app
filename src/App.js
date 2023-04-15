// import "./App.css";

import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import jsPDF from "jspdf";

function App() {
  // const API_URL = "http://localhost:3500/items";

  // JSON.parse(localStorage.getItem('shoppinglist')) ||
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("shoppinglist", JSON.stringify(items));
  }, [items]);

  const addItem = (name) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, name };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
    // console.log('submitted');
  };

  const handleNewPDF = () => {
    let titleListName = "TODO list"
    let currentDate = new Date();
    let dd = String(currentDate.getDate()).padStart(2, '0');
    let mm = String(currentDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = currentDate.getFullYear();
    currentDate = dd + '.' + mm + '.' + yyyy+ '.';

    let arrayText = [];
    
    var doc = new jsPDF();
    for(var i = 0; i < items.length; i++) {
      arrayText.push((i+1) + ". " + items[i].name);
    }
    doc.text(titleListName, 10, 20);
    doc.text(currentDate, 10, 30);
    doc.text(arrayText, 10, 40, 'left');
    doc.save("TODOList.pdf");
  };

  return (
    <div className="App">
      <Header length={items.length}/>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        handleNewPDF={handleNewPDF}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
