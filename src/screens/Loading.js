// Loading.js
import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
export default class Loading extends React.Component {

    componentDidMount () {
      console.log('LOADING CDM', this.props)
        if( this.props.loggedIn) {
           this.props.navigate('main');
           return
        };
        alert(props);
    }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading {this.props.loggedIn}</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})