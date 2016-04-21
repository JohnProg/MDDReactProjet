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

class MenuBarIcon extends Component {
    onPress(){
        this.props.navigator.push({
            id: 'MenuBar'
        })
    }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this)}>
            <Image style={styles.image} source={require('../assets/menu-icon.png')} />
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
  button: {
      flex: 1,
  },


});

module.exports = MenuBarIcon;
