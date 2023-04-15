import React from "react";

const Header = ({length}) => {
  return (
    <header>
      <h2>TODO LIST</h2> {length}{length === 1 ? " item" : " items"}
    </header>
  );
};

export default Header;
