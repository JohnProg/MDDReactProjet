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
  View
} from 'react-native';

var TopBar = require('./components/TopBar');
var MainContent = require('./components/MainContent');

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TopBar style={styles.topBar} name="TopBar"/>
        <MainContent style={styles.Content} name="MainContent"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
  },
  topBar: {
      flex: 2,
  },
  content: {
      flex: 7,
  },
});

module.exports = Home;
