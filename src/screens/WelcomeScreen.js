// import _ from 'lodash';
import React, { Component } from 'react';
// import { AppLoading } from 'expo';
import { View, Text, Button, AsyncStorage } from 'react-native';

class WelcomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
      };
      render() {
        const {navigate} = this.props.navigation;
        return (
          <Button
            title="Go to AuthScreen"
            onPress={() => navigate('auth')}
          />
        );
      }
    }

export default WelcomeScreen;