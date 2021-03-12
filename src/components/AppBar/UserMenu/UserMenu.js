import React from 'react';
import { connect } from 'react-redux';
import { getUserName } from 'redux/auth/authSelectors';
import defaultImg from './defAvaCir.png';

function UserMenu({ name, avatar }) {
  return (
    <div>
      <img src={avatar} alt="user avatar" width="40px" />
      <span>{name}</span>
      <button type="button"> Выйти </button>
    </div>
  );
}

const mapStateToProps = state => ({
  name: getUserName(state),
  avatar: defaultImg,
});

export default connect(mapStateToProps)(UserMenu);
