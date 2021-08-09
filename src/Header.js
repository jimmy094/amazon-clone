import React from 'react';
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className='header'>
            <img className="header_logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>

            <div className="header_search">
               <input
               className="header_searchInput" type="text"/>
               <SearchIcon className="header__searchIcon"/>
               </div>
               <div className='header_nav'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Hello Guest</span>
                        <span className='header__optionLine'>Sign in</span>
                    </div>
                    
                    
                    <div className='header__option'>
                        <span className='header__optionLineTwo'>Returns</span>
                        <span className='header__optionLineThree'>& Orders</span>
                    </div>
                    
                    
                    <div className='header__option'>
                        <span className='header__optionLineFour'>Your</span>
                        <span className='header__optionLineFive'>Prime</span>
                    </div>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__basketCount">0</span>
                    </div>
               </div>
                    
                   

            
            
        </div>
    )
}

export default Header;