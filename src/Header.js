import React from 'react';
import "./Header.css";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{basket, user}] = useStateValue();

    const handleAuthentication = () => {
        if(auth) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to="/">
                <img className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
            </Link>

            <div className='header__search'>
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
                {/* Logo */}
            </div>

            <div className="header__nav">

                <Link to = {!user && '/login'}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">Hello {user? 'Name':'Guest'}</span>
                        <span className="header__optionLineTwo">{user? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        
                        <span className="header__optionLineTwo header__basketCount">
                            {/* conditional chaining done 'basket?.length', if the value becomes null or any error shows up it handles gracefully */}
                            {basket?.length}
                            
                        </span>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}
 
export default Header;