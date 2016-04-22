/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
  View
} from 'react-native';

class MyAccount extends Component {

    onPush(){
        this.props.navigator.push({
            id: 'Account'
        })
    }


  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.onPush.bind(this)}>
            <Image style={styles.image} source={require('../assets/Account.png')} />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingLeft: 20,
  },

});

module.exports = MyAccount;
