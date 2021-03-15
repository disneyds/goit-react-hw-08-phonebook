import paths from 'components/Routes/paths';
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsAuth } from 'redux/auth/authSelectors';
import AuthNav from './AuthNav/AuthNav';
import UserMenu from './UserMenu/UserMenu';

function Header({ isAuth }) {
  return (
    <header>
      <NavLink to={paths.PHONEBOOK}>book</NavLink>
      {isAuth ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

const mapStateToProps = state => ({
  isAuth: getIsAuth(state),
});

export default connect(mapStateToProps)(Header);
