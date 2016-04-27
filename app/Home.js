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
        <TopBar style={styles.topBar} name="TopBar" navigator= {this.props.navigator}/>
        <MainContent style={styles.mainContent} name="MainContent" navigator= {this.props.navigator}/>
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
