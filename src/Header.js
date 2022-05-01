import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
// import { getAuth, signOut } from "firebase/auth";

// import {signOut} from 'firebase/auth';

export default function Header() {
  const [{basket,user }] = useStateValue();

  const handleAuthentication=()=>{
    if(user) {
      auth.signOut();
  } 
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="hello"
        />
      </Link>
      <div className="header_address">
      <span className="address_line1">Hello</span>
      {/* <LocationOnOutlinedIcon className="address_icon"/> */}
          <span className="address_line2">Select your address</span>
      </div>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>


      <div className="header_nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="line1">Hello {!user? 'Guest':user.email}</span>
            <span className="line2"> {user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="line1">Returns</span>
          <span className="line2">& Orders</span>
        </div>

        <div className="header_option">
          <span className="line1">Your</span>
          <span className="line2">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="basket">
            <ShoppingBasketIcon />
            <span className="line2_basket">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
