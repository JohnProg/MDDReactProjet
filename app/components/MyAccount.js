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
  render() {
    return (
      <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/Account.png')} />
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
