// import { React, Component } from 'react';
// import Form from './components/Form/Form';
// import ContactsList from './components/ContactsList/ContactsList';
// import Filter from './components/Filter/Filter';
// import Title from 'components/Title/Title';
// import Alert from 'components/Alert/Alert';
// import { connect } from 'react-redux';
// import { fetchContacts } from 'redux/phonebook/phonebookOperations';
// import { getError } from 'redux/phonebook/phonebookSelectors';

// class PhonebookView extends Component {
// //   componentDidMount() {
// //     this.props.fetchContacts();
// //   }

//   render() {
//     // const { onError } = this.props;

//     return (
//       <Container>
//         <AppBar/>
//         <div className="phoneBook">
//           <Title />

//           <Form />

//           <Filter />

//           <ContactsList />

//           {/* {onError && <Alert massage={onError.message} alert={onError} />} */}
//         </div>
//       </Container>
//     );
//   }
// }

// // const mapStateToProps = state => ({
// //   onError: getError(state),
// // });

// // const mapDispatchToProps = dispatch => ({
// //   fetchContacts: () => dispatch(fetchContacts()),
// // });
// // mapStateToProps, mapDispatchToProps
// export default connect()(PhonebookView);

import React from 'react';

export default function PhonebookView() {
  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
}
