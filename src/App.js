import { React, Component } from 'react';
import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Container from './components/Container/Container';
import { connect } from 'react-redux';
import AppBar from 'components/AppBar/AppBar';
import Routes from 'components/Routes/Routes';

class App extends Component {
  render() {
    return (
      <Container>
        <AppBar />
        <Routes />
      </Container>
    );
  }
}

export default connect()(App);
