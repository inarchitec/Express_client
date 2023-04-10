import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";
import Cart from "../Cart/Cart";

const Navbar = () => {
  // State hook to manage the opening/closing of the cart
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        {/* Left side of the navbar */}
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            {/* Link to the Furniture products page */}
            <Link className="link" to="/products/1">
              Furniture
            </Link>
          </div>
          <div className="item">
            {/* Link to the Spices products page */}
            <Link className="link" to="/products/2">
              Spices
            </Link>
          </div>
          <div className="item">
            {/* Link to the Grain products page */}
            <Link className="link" to="/products/3">
              Grain
            </Link>
          </div>
        </div>
        {/* Center of the navbar */}
        <div className="center">
          {/* Link to the homepage */}
          <Link className="link" to="/">
            EthioExpress
          </Link>
        </div>
        {/* Right side of the navbar */}
        <div className="right">
          <div className="item">
            {/* Link to the homepage */}
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            {/* Link to the About page */}
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            {/* Link to the Contact page */}
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            {/* Link to the Stores page */}
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          {/* Icons section of the navbar */}
          <div className="icons">
            {/* Search icon */}
            <SearchIcon />
            {/* Person icon */}
            <PersonOutlineOutlinedIcon />
            {/* Favorite icon */}
            <FavoriteBorderOutlinedIcon />
            {/* Cart icon */}
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
      {/* Conditionally render the cart component if open is true */}
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
