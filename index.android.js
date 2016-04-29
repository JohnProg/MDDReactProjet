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

var Login = require('./app/Login');
var Home = require('./app/Home');
var Signup = require('./app/Signup');
var Account = require('./app/Account');

var MyAccount = require('./app/components/MyAccount');
var TopBar = require('./app/components/TopBar');
var MenuBarIcon = require('./app/components/MenuBarIcon');

var Description = require('./app/components/Description');


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
      navigator = navigator;
      switch (route.id) {
          case 'Login':
              return (<Login passProps={route.passProps} navigator={navigator} title="Login" />);

          case 'Home':
              return (<Home passProps={route.passProps} navigator={navigator} title="Home" />);

          case 'Signup'
              return (<Signup passProps={route.passProps} navigator={navigator} title="Signup" />);

          case 'Description':
              return (<Description passProps={route.passProps}  navigator={navigator} title="Description" />);

          case 'Account':
              return (<Account passProps={route.passProps}  navigator={navigator} title="Account" />);

          case 'MyAccount':
              return (<MyAccount passProps={route.passProps}  navigator={navigator} title="MyAccount" />);

          case 'MenuBarIcon':
              return (<MenuBarIcon passProps={route.passProps}  navigator={navigator} title="MenuBarIcon" />);

          case 'TopBar':
              return (<TopBar passProps={route.passProps}  navigator={navigator} title="TopBar" />);


      }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

AppRegistry.registerComponent('AniFan', () => AniFan);
