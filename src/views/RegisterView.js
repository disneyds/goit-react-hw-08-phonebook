import Alert from 'components/Alert/Alert';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registration } from 'redux/auth/authOperations';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    alert: false,
    massage: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onAlert = text => {
    this.setState({
      massage: text,
      alert: true,
    });
    setTimeout(() => {
      this.setState({ massage: '', alert: false });
    }, 3000);
  };

  onSubmitForm = e => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = this.state;
    if (name === '') {
      this.onAlert('Пожалуйста, введите имя');
      return;
    }
    if (email === '') {
      this.onAlert('Пожалуйста, введите эллектронный адресс');
      return;
    }
    if (password === '') {
      this.onAlert('Пожалуйста, введите пароль');
      return;
    }
    if (password !== confirmPassword) {
      this.onAlert('Пароль не совпадает, попробуйте ещё раз');
      return;
    }
    this.props.onRegister({ name, email, password });
  };

  render() {
    const { massage, alert } = this.state;
    return (
      <>
        <Alert massage={massage} alert={alert} />

        <form onSubmit={this.onSubmitForm}>
          <label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              placeholder="name"
            ></input>
          </label>

          <label>
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
              placeholder="email"
            ></input>
          </label>

          <label>
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              placeholder="password"
            ></input>
          </label>

          <label>
            <input
              type="password"
              name="confirmPassword"
              onChange={this.handleChange}
              value={this.state.confirmPassword}
              placeholder="confirmPassword"
            ></input>
          </label>
          <button type="submit">Войти</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onRegister: registration,
};

export default connect(null, mapDispatchToProps)(Register);
