import { React, Component } from 'react';
import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Container from './components/Container/Container';
import { connect } from 'react-redux';
import AppBar from 'components/AppBar/AppBar';
import Routes from 'components/Routes/Routes';
import { getCurrentUser } from 'redux/auth/authOperations';
import { getToken } from './redux/auth/authSelectors';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />
        <Routes />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  token: getToken(state),
});
const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
