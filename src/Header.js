import React from 'react';
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";



function Header() {

    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to="/">
            <img 
            className="header_logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
            </Link>

            <div className="header_search">
               <input
               className="header_searchInput" type="text"/>
               <SearchIcon className="header__searchIcon"/>
            </div>

               <div className='header_nav'>
                 <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className='header__option'>
                        <span className='header__optionLineOne'>Hello {!user ? 'Guest' : user.email}</span>
                        <span className='header__optionLine'>{(user ? 'Sign Out' : 'Sign In')}</span>
                    </div>
                 </Link>
                    
                    <div className='header__option'>
                        <span className='header__optionLineTwo'>Returns</span>
                        <span className='header__optionLineThree'>& Orders</span>
                    </div>
                    
                    
                    <div className='header__option'>
                        <span className='header__optionLineFour'>Your</span>
                        <span className='header__optionLineFive'>Prime</span>
                    </div>

                   <Link to="/checkout">
                      <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__basketCount">
                        {basket?.length}
                        </span>
                      </div>
                    </Link> 
               </div>
           </div>
        );
    }
                    
                   

            
            

export default Header;