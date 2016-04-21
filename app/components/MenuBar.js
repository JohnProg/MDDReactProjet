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

var SignInState = require('./SignInState');
var SignOutState = require('./SignOutState');

class MenuBar extends Component {
    constructor(props) {
      super(props)
      this.state = {
        text: 'Sign In'
      }
    }
  render() {
    return (
      <View style={styles.container}>

            <View>
                <Text>
                    Ani Fan
                </Text>
            </View>
            <View>
                <TouchableHighlight>
                    <Text>
                        {this.state}
                    </Text>
                </TouchableHighlight>
            </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

});

module.exports = MenuBar;
