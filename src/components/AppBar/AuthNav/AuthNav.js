import paths from 'components/Routes/paths';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Auth() {
  return (
    <div>
      <NavLink to={paths.LOGIN}>Логин</NavLink>
      <NavLink to={paths.REGISTER}>Регистрация</NavLink>
    </div>
  );
}
