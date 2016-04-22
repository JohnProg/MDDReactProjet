'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';


import Button from './components/Button';
import Signup from './Signup';
import Account from './Account';
import Firebase from 'firebase';

let app = new Firebase("https://anifan.firebaseio.com/");

class Login extends Component {

    constructor(props){
      super(props);
      this.state = {
        email: '',
        password: '',
        loaded: true
      }
    }


    login(){

        this.setState({
          loaded: false
        });

        app.authWithPassword({
          "email": this.state.email,
          "password": this.state.password
        }, (error, user_data) => {

          this.setState({
            loaded: true
          });

          if(error){
            alert('Login Failed. Please try again');
          }else{
            AsyncStorage.setItem('user_data', JSON.stringify(user_data));
            this.props.navigator.push({
              component: Home
            });
          }
        });
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
           onChangeText={(text) => this.setState({email: text})}
           value={this.state.email}
           placeholder={"Email Address"}
         />
        <Text style={[styles.headings]}>
          Password
        </Text>
        <TextInput
           style={styles.textField}
           onChangeText={(text) => this.setState({password: text})}
           value={this.state.password}
           secureTextEntry={true}
           placeholder={"Password"}
         />
        <Text style={styles.tex}>
            Forgot Password?
        </Text>
        <TouchableHighlight style={[styles.button]} underlayColor='#1F4E66' onPress={this.login.bind(this)}>
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

module.exports = Login;

// <Button
//     text="Login"
//     button_styles={[styles.button, styles.signUp]}
//     button_text_styles={styles.buttonText}
//     onPress={this.login.bind(this)}
// />
// <Button
//     text="Signup"
//     button_styles={[styles.button, styles.signUp]}
//     button_text_styles={styles.buttonText}
//     onPress={this.onSignup.bind(this)}
// />
