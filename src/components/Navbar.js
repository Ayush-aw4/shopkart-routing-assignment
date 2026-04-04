import React from "react";

// TODO: Convert to Link or NavLink

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <span style={{ marginRight: "15px" }}>Home</span>
      <span style={{ marginRight: "15px" }}>About</span>
      <span>Contact</span>
    </nav>
  );
}

export default Navbar;
