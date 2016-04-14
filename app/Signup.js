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

class Signup extends Component {

    onButtonPress(){
        this.props.navigator.push({
            id: 'Home'
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
         <Text style={[styles.headings]}>
           Email
         </Text>
         <TextInput
            style={styles.textField}
            onChangeText={(text) => this.setState({text})}
          />
        <TouchableHighlight style={[styles.button]}
        underlayColor='#1F4E66'
        onPress={this.onButtonPress.bind(this)}
        >
            <Text style={styles.buttonText}>
                Submit
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
});

module.exports = Signup;
