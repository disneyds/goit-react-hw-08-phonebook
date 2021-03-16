import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import Form from 'components/Form/Form';
import Title from 'components/Title/Title';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from 'redux/phonebook/phonebookOperations';

class PhonebookView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <Title text="Контакты" />
        <Form />
        <Filter />
        <ContactsList />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(null, mapDispatchToProps)(PhonebookView);
