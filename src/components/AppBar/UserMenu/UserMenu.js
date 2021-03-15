import React from 'react';
import { connect } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { getUserName } from 'redux/auth/authSelectors';
import defaultImg from './defAvaCir.png';

function UserMenu({ name, avatar, onLogout }) {
  return (
    <div>
      <img src={avatar} alt="user avatar" width="40px" />
      <span>{name}</span>
      <button type="button" onClick={onLogout}>
        {' '}
        Выйти{' '}
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  name: getUserName(state),
  avatar: defaultImg,
});

const mapDispatchToProps = {
  onLogout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
