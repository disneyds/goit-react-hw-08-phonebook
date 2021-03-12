import Alert from 'components/Alert/Alert';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from 'redux/auth/authOperations';

class Login extends Component {
  state = {
    email: '',
    password: '',
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
    const { email, password } = this.state;
    if (email === '') {
      this.onAlert('Пожалуйста, введите логин');
      return;
    }
    if (password === '') {
      this.onAlert('Пожалуйста, введите пароль');
      return;
    }
    this.props.onLogin({ email, password });
    this.setState({ email: '', password: '' });
  };

  render() {
    const { massage, alert } = this.state;
    return (
      <>
        <Alert massage={massage} alert={alert} />

        <form onSubmit={this.onSubmitForm}>
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
          <button type="submit">Войти</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onLogin: login,
};

export default connect(null, mapDispatchToProps)(Login);
