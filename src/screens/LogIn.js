// // import _ from 'lodash';
// import React, { Component } from 'react';
// // import { AppLoading } from 'expo';
// import { View, Text, Button, AsyncStorage } from 'react-native';

// class Login extends Component {
//     static navigationOptions = {
//         title: 'LogIn',
//       };
//       render() {
//         const {navigate} = this.props.navigation;
//         return (
//           <Button
//             title="Go to SignUp"
//             onPress={() => navigate('signup')}
//           />
//         );
//       }
//     }

// export default Login;

// Login.js
import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  handleLogin = () => {
    // TODO: Firebase stuff...
    console.log('email', this.state.email);
    console.log('password', this.state.password);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Login" onPress={this.handleLogin} />
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => this.props.navigation.navigate('signup')}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})