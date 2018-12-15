// import _ from 'lodash';
import React, { Component } from 'react';
// import { AppLoading } from 'expo';
import { View, Text, Button, AsyncStorage } from 'react-native';

class Login extends Component {
    static navigationOptions = {
        title: 'LogIn',
      };
      render() {
        const {navigate} = this.props.navigation;
        return (
          <Button
            title="Go to SignUp"
            onPress={() => navigate('signup')}
          />
        );
      }
    }

export default Login;