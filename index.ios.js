/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator
} from 'react-native';

var First = require('./app/First');
var Home = require('./app/Home');
var Signup = require('./app/Signup');
var Desciption = require('./app/components/Desciption');

class AniFan extends Component {
  render() {
    return (
    <Navigator
    style={styles.container}
        initialRoute={{
            id: 'Home'
        }}
        renderScene = { this.navigatorRenderScene }
    />
    );
  }

  navigatorRenderScene(route, navigator){
      _navigator = navigator;
      switch (route.id) {
          case 'First':
              return (<First passProps={route.passProps} navigator={navigator} title="First" />);

          case 'Home':
              return (<Home passProps={route.passProps} navigator={navigator} title="Home" />);

          case 'Signup':
              return (<Signup passProps={route.passProps} navigator={navigator} title="Signup" />);

          case 'Desciption':
              return (<Desciption passProps={route.passProps}  navigator={navigator} title="Desciption" />);


      }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

AppRegistry.registerComponent('AniFan', () => AniFan);
