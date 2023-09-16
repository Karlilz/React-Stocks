import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav"  style={{display:'flex', flexDirection:'row', justifyContent:'space-around',backgroundColor: 'black', height: '60px' }}>
      <Link to="/" style={{ textDecoration: "underline", color: "white"}}>
        <span style={{ fontWeight: "bold", fontSize: "20px", lineHeight: "60px"}}>Home</span>
      </Link>

      <Link to="/about" style={{ textDecoration: "underline", color: "white"}}>
        <span style={{ fontWeight: "bold", fontSize: "20px", lineHeight: "60px" }}>About</span>
      </Link>

      <Link to="/stocks" style={{ textDecoration: "underline", color: "white"}}>
        <span style={{ fontWeight: "bold", fontSize: "20px", lineHeight: "60px" }}>Stocks Dashboard</span>
      </Link>
    </div>
  );
};

export default Nav;