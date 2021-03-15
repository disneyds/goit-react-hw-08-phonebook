import Alert from 'components/Alert/Alert';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import Form from 'components/Form/Form';
import Title from 'components/Title/Title';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from 'redux/phonebook/phonebookOperations';
import { getError } from 'redux/phonebook/phonebookSelectors';

class PhonebookView extends Component {
  state = {
    alert: false,
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  onAlert = () => {
    this.setState({
      alert: true,
    });
    setTimeout(() => {
      this.setState({ alert: false });
    }, 3000);
  };

  render() {
    // const { alert } = this.state;
    const { onError } = this.props;

    return (
      <div className="phoneBook">
        <Title />
        <Form />
        <Filter />
        <ContactsList />
        {onError && <Alert massage={onError.message} alert={onError} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  onError: getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookView);
