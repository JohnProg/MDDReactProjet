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

class TopBar extends Component {
    // <TouchableHighlight style={[styles.logo, styles.lastfield]}>
    //     <View>
    //         <Text>
    //             menu
    //         </Text>
    //     </View>
    // </TouchableHighlight>
  render() {
    return (
      <View style={styles.container}>
        <Text> Menu</Text>
        <Text> Friends</Text>
        <Text> Account</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#17A7AB',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

});

module.exports = TopBar;
