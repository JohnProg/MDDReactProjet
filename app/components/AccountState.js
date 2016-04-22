'use strict';
import React, {
  Component,
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

class AccountState extends Component {


  render() {
    return (
      <View style={ styles.container }>
          <Text style={styles.largeText}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDFD4',

  },
  largeText: {
    flex: 1,
    fontSize: 52,
    fontFamily: 'HelveticaNeue-CondensedBold',
    paddingTop: 40,
    paddingRight: 20,
    paddingLeft: 20,
    color: '#173E43',

  },
  smallText: {
    flex: 1,
    fontSize: 26,
    fontFamily: 'HelveticaNeue-CondensedBold',
    paddingTop: 20,
    color: '#173E43',

  },
  input: {
    height: 40,
    borderColor: '#173E43',
    borderWidth: 2,
    textAlign: 'center',

  },
});

module.exports = AccountState;
