import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Provider } from 'react-redux';
// import reducers from './reducers';
import * as firebase from "firebase";
import AppContainer from './containers/AppContainer'
import { createStackNavigator, createAppContainer } from "react-navigation";
// import store from './store';
import LogIn from './screens/LogIn';
import SignUp from './screens/SignUp';
import Loading from './screens/Loading';
import Main from './screens/Main';
import HomeScreen from './screens/HomeScreen';

// const AppNavigator = createStackNavigator({ 
//     loading: { screen: Loading },
//     login:   { screen: LogIn },
//     signup:  { screen: SignUp },
//     main:    { screen: Main },
//   });

// export const MainNavigator = createStackNavigator({ 
//     // loading: { screen: Loading },
//         login:   { screen: LogIn },
//         signup:  { screen: SignUp },
//         main:    { screen: Main },

// })
// ,{
//     initialRouteName: login
// });
const AppNavigator = createStackNavigator({
        login: { screen: LogIn },
        signup:  { screen: SignUp },
        main:    { screen: Main },
    });

  
  
  const MainNavigator=  createAppContainer(AppNavigator);
export default class App extends React.Component {
    // state = { loggedIn: null };
    state = {email: 'davidmgudeman@gmail.com', password: 'sparky', loggedIn: ''};
    navigate = this.props.navigation;
    
        componentWillMount() {
            firebase.initializeApp({
                apiKey: "AIzaSyC95ZVXo7QkIrDbbXkfORwM7sEKEV4u9xU",
                authDomain: "magicsearchnative.firebaseapp.com",
                databaseURL: "https://magicsearchnative.firebaseio.com",
                projectId: "magicsearchnative",
                storageBucket: "magicsearchnative.appspot.com",
                messagingSenderId: "1069953472941"
            });
        // }
//         onButtonPress = () => {
//             alert('Hi there');
//             const { email, password } = this.state;
//             firebase.auth().signInWithEmailAndPassword(email, password)
//             .then(()=> navigate('main'))
//             .catch(() => {
//                 firebase.auth().createUserWithEmailAndPassword(email, password)
//                 .then(()=> navigate('signup'))
//                 .catch(console.log('SIGNUP failed'))
//             })
//         }
//     render() {
        
//         return (
//             <View style={styles.container}>
//                 <Text> Hi There </Text>
//                 <Button style={styles.Button} title="SignIn" onPress={() => this.onButtonPress()}/>
//             </View>
        
//         );
//     }
// }

//     const styles = StyleSheet.create({
//         container: {
//             flex: 1,
//             justifyContent: 'center',
//             alignItems: 'center',
//             backgroundColor: '#F5FCFF',
//         },
//         welcome: {
//             fontSize: 20,
//             textAlign: 'center',
//             margin: 10,
//         },
//         instructions: {
//             textAlign: 'center',
//             color: '#333333',
//             marginBottom: 5,
//         },
//         Button: {
//             backgroundColor: "#841584",
//         }
//     });
    
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {

          this.setState({ loggedIn: true });
          
          alert('loggedIn true')
        return
        } else {
          this.setState({ loggedIn: false });
          alert('loggedIn false');
          return;
        }
        alert('NO USER')
      });
    
    }
  
  render() {
   
     
    

    return (
    //   <Provider store={store}>
        <MainNavigator/>
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