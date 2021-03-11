import Alert from 'components/Alert/Alert';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Register extends Component {
  state = {
    name: '',
    login: '',
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
    if (this.state.name === '') {
      this.onAlert('Пожалуйста, введите имя и телефон');
      return;
    }
    if (this.props.contacts.find(({ name }) => name === this.state.name)) {
      this.onAlert(`Контакт ${this.state.name} уже существует`);
      return;
    }
    // this.props.handleSubmit(this.state);
    this.setState({ name: '', number: '' });
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
              type="text"
              name="login"
              onChange={this.handleChange}
              value={this.state.login}
              placeholder="login"
            ></input>
          </label>
          <label>
            <input
              type="text"
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
const mapStateToProps = state => ({
  //   contacts: getContacts(state),
});
const mapDispatchToProps = dispatch => ({
  //   handleSubmit: ({ name, number }) => dispatch(addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
