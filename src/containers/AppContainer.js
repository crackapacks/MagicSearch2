import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
// import { SwitchNavigator } from 'react-navigation'
import { createAppContainer,  createStackNavigator, SwitchNavigator } from 'react-navigation';
// you can also import from @react-navigation/native
import LogIn from '../screens/LogIn';
import SignUp from '../screens/SignUp';
import Loading from '../screens/Loading';
import Main from '../screens/Main';

const AppNavigator = createStackNavigator({ 
    loading: { screen: Loading },
    login:   { screen: LogIn },
    signup:  { screen: SignUp },
    main:    { screen: Main },
  });

  // create our app's navigation stack
// const AppNavigator = SwitchNavigator(
//     {
//       Loading,
//       SignUp,
//       LogIn,
//       Main
//     },
//     {
//       initialRouteName: 'Loading'
//     }
//   )

const AppContainer = createAppContainer(AppNavigator);

// Now AppContainer is the main component for React to render

export default AppContainer;

