import React from "react";
import "./Header2.css";
//import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
// import HomeIcon from '@mui/icons-material/Home';
// import img from "./SE e-commerce logo.png"
import img from "./logo1.png"
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header1">
      <Link to="/">
        <img
          className="header__logo1"
          // src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          src={img} alt="logo"
        />
      </Link>


      <div className="header__nav1">
        <Link to={!user && '/login'}  className="linkText1">
          <div onClick={handleAuthenticaton} className="header__option1">
            <span className="header__optionLineOne1">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo1">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to='/orders' className="linkText1">
          <div className="header__option1">
            <span className="header__optionLineOne1">Returns</span>
            <span className="header__optionLineTwo1">& Orders</span>
          </div>
        </Link>
        
      </div>
    </div>
  );
}

export default Header;
