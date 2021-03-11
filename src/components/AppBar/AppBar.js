import React from 'react';
import { connect } from 'react-redux';
import AuthNav from './AuthNav/AuthNav';
import UserMenu from './UserMenu/UserMenu';

function Header() {
  return <header>{false ? <UserMenu /> : <AuthNav />}</header>;
}

const mapStateToProps = state => ({
  // isAuth: false
});

export default connect(mapStateToProps)(Header);
