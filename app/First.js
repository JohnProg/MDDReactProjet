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

class First extends Component {

    onLogin(){
        this.props.navigator.push({
            id: 'Home'
        })
    }
    onSignup(){
        this.props.navigator.push({
            id: 'Signup'
        })
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.logo, styles.lastfield]}>
          Ani Fan
        </Text>
        <Text style={[styles.headings, styles.firstField]}>
          Username
        </Text>
        <TextInput
           style={styles.textField}
           onChangeText={(text) => this.setState({text})}
         />
        <Text style={[styles.headings]}>
          Password
        </Text>
        <TextInput
           style={styles.textField}
           onChangeText={(text) => this.setState({text})}
         />
        <Text style={styles.tex}>
            Forgot Password?
        </Text>
        <TouchableHighlight style={[styles.button]}
        underlayColor='#1F4E66'
        onPress={this.onLogin.bind(this)}
        >
            <Text style={styles.buttonText}>
                Log In
            </Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.button, styles.signUp]} onPress={this.onSignup.bind(this)}>
            <Text style={[styles.buttonText]}>
                Sign Up
            </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#17A7AB',
  },
  logo: {
    fontSize: 50,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Helvetica Neue',
    color: "#fff",
  },
  headings: {
    fontFamily: 'Helvetica Neue',
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'left',
    color: '#fff',
    marginTop: 20,
    marginRight: 150,
    marginBottom: 10,
  },
  firstField: {
      marginTop: 40,
  },
  textField: {
      width: 250,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      backgroundColor: '#fff',
      borderRadius: 7,
      marginLeft: 60,
      fontSize: 18,
      paddingLeft: 10,
  },
  tex: {
      color: '#fff',
      textDecorationLine : 'underline',
      marginTop: 5,
      marginRight: 140,
      marginBottom: 10,
  },
  button: {
      width: 250,
      height: 50,
      marginTop: 20,
      borderRadius: 13,
      borderWidth: 1,
      borderColor: '#1F4E66',
      backgroundColor: '#1F4E66',
      justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Helvetica Neue',
    fontWeight: '600',
    textAlign: 'center',
    color: '#fff',
  },
  signUp: {
      backgroundColor: '#F97B3D',
      borderColor: '#F97B3D',
  },
});

module.exports = First;
