'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  AsyncStorage
} from 'react-native';

import Button from './components/Button';
import Login from './Login';
import Firebase from 'firebase';
import Home from './Home';

let app = new Firebase("https://anifan.firebaseio.com/");

class Signup extends Component {

    constructor(props){
       super(props);

       this.state = {
         loaded: true,
         email: '',
         password: ''
       };
     }

  signup(){

    this.setState({
      loaded: false
    });

    app.createUser({
      'email': this.state.email,
      'password': this.state.password
    }, (error, userData) => {

      if(error){
        switch(error.code){

          case "EMAIL_TAKEN":
            alert("The new user account cannot be created because the email is already in use.");
          break;

          case "INVALID_EMAIL":
            alert("The specified email is not a valid email.");
          break;

          default:
            alert("Error creating user:");
        }

      }else{
        this.props.navigator.push({
          id: 'Login'
        });
      }

      this.setState({
        email: '',
        password: '',
      });

    });

  }

  back(){
      this.props.navigator.pop({
          id: 'Account'
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
         <TouchableHighlight style={[styles.button]} underlayColor='#1F4E66' onPress={this.signup.bind(this)}>
             <Text style={styles.buttonText}>
                 Submit
             </Text>
         </TouchableHighlight>

          <Button
            text="Back"
            onpress={this.back.bind(this)}
            button_styles={[styles.button, styles.back]}
            button_text_styles={styles.buttonText} />
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
      borderColor: '#F97B3D',
      backgroundColor: '#F97B3D',
      justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Helvetica Neue',
    fontWeight: '600',
    textAlign: 'center',
    color: '#fff',
  },
  back: {
      backgroundColor: 'grey',
      borderColor: 'grey',
  }
});

module.exports = Signup;

// <Button
//     text="Signup"
//     button_styles={[styles.button]}
//     button_text_styles={styles.buttonText}
//     underlayColor='#1F4E66'
//     onPress={this.signup.bind(this)}
// />
