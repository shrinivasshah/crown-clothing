import './Header.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase'
import CartIcon from '../cartIcon/CartIcon';
import CartDropdown from '../cartDropdown/CartDropdown';
import { selectCartHidden } from '../../redux/cart/cartSelectors'
import {selectCurrentUser} from '../../redux/user/user-selector'
 

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  hidden:selectCartHidden,
  currentUser:selectCurrentUser
});

export default connect(mapStateToProps)(Header);