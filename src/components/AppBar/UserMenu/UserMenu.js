import React from 'react';
import { connect } from 'react-redux';
import defaultImg from './defAvaCir.png';

function UserMenu() {
  return (
    <div>
      <img src={defaultImg} alt="user avatar" width="40px" />

      <button type="button"> Выйти </button>
    </div>
  );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(UserMenu);
