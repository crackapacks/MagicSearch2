// import React, { Component } from 'react';
// import { View, Text, AsyncStorage } from 'react-native';
// import { connect } from 'react-redux';
// import * as actions from '../actions';

// export default class SignUp extends Component {


//   render() {
//     return (
//       <View>
//         <Text> signup screen </Text>
//         <Text> signup screen </Text>
//         <Text> signup screen </Text>
//         <Text> signup screen </Text>

//         <Text> signup screen </Text>
//         </View>
//     )
    
//   }
// }
// function mapStateToProps({ signup }) {
//   return {token: signup.token}
// }

// export default connect(mapStateToProps, actions)(SignUp);o


// SignUp.js
import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
export default class SignUp extends React.Component {
  state = { email: '', password: '', errorMessage: null }
handleSignUp = () => {
  // TODO: Firebase stuff...
  console.log('handleSignUp')
}
render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Sign Up" onPress={this.handleSignUp} />
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})

