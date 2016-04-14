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

class AniFan extends Component {
  render() {
    return (
    <Navigator
    style={styles.container}
        initialRoute={{
            id: 'First'
        }}
        renderScene = { this.navigatorRenderScene }
    />
    );
  }

  navigatorRenderScene(route, navigator){
      _navigator = navigator;
      switch (route.id) {
          case 'First':
              return (<First navigator={navigator} title="First" />);

          case 'Home':
              return (<Home navigator={navigator} title="Home" />);

          case 'Signup':
              return (<Signup navigator={navigator} title="Signup" />);


      }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

AppRegistry.registerComponent('AniFan', () => AniFan);
