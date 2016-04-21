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
    constructor(props) {
       super(props)
       this.state = {
         text: 'Search'
       }
     }
  render() {
    return (
      <View style={styles.container}>
        <TopBar style={styles.topBar} name="TopBar"/>
        <MainContent style={styles.mainContent} name="MainContent"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  }
});

module.exports = Home;
