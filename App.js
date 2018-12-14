import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
// import reducers from './reducers';
import * as firebase from "firebase";
import AppContainer from './src/containers/AppContainer'
// import store from './store';

export default class App extends React.Component {
  state = { loggedIn: null };
  
    componentWillMount() {
      firebase.initializeApp({
        apiKey: "AIzaSyC95ZVXo7QkIrDbbXkfORwM7sEKEV4u9xU",
        authDomain: "magicsearchnative.firebaseapp.com",
        databaseURL: "https://magicsearchnative.firebaseio.com",
        projectId: "magicsearchnative",
        storageBucket: "magicsearchnative.appspot.com",
        messagingSenderId: "1069953472941"
      });
  
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false });
        }
      });
    
    }
  
  render() {
   
     
    

    return (
    //   <Provider store={store}>
        <AppContainer/>
    //   </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});