import { React, Component } from 'react';
import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Container from './components/Container/Container';
import Form from './components/Form/Form';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import Title from 'components/Title/Title';
import Alert from 'components/Alert/Alert';
import { connect } from 'react-redux';
import { fetchContacts } from 'redux/phonebook/phonebookOperations';
import { getError } from 'redux/phonebook/phonebookSelectors';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { onError } = this.props;

    return (
      <Container>
        <div className="phoneBook">
          <Title />

          <Form />

          <Filter />

          <ContactsList />

          {onError && <Alert massage={onError.message} alert={onError} />}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  onError: getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
