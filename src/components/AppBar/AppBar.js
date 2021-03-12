import React from 'react';
import { connect } from 'react-redux';
import { getIsAuth } from 'redux/auth/authSelectors';
import AuthNav from './AuthNav/AuthNav';
import UserMenu from './UserMenu/UserMenu';

function Header({ isAuth }) {
  return <header>{isAuth ? <UserMenu /> : <AuthNav />}</header>;
}

const mapStateToProps = state => ({
  isAuth: getIsAuth(state),
});

export default connect(mapStateToProps)(Header);
