'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage
} from 'react-native';

import Button from './components/Button';
import Login from './Login';
import Firebase from 'firebase';

const TopBar = require('./components/TopBar')
let app = new Firebase("https://anifan.firebaseio.com");

class Account extends Component {

  constructor(props){

    super(props);
    this.state = {
      loaded: false,
    }

  }

  componentWillMount(){

    AsyncStorage.getItem('user_data').then((user_data_json) => {
      let user_data = JSON.parse(user_data_json);
      this.setState({
        user: user_data,
        loaded: true
      });
    });

  }

  render(){

    return (
      <View style={styles.container}>
        <View>
        {
          this.state.user &&
            <View style={styles.email_container}>
                <TopBar style={styles.topBar} name="TopBar" navigator= {this.props.navigator}/>
              <View>
                <Text style={styles.email_text}>{this.state.user.password.email}</Text>
              </View>
              <Image
                style={styles.image}
                source={{uri: this.state.user.password.profileImageURL}}
              />
              <Button
                  text="Logout"
                  onpress={this.logout.bind(this)}
                  />
            </View>
        }
        </View>
      </View>
    );
  }

  logout(){

    AsyncStorage.removeItem('user_data').then(() => {
      app.unauth();
      this.props.navigator.push({
        id: 'Home'
      });
    });

  }

}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#343535',
  },
  email_container: {
      flex: 1,
      backgroundColor: '#343535',
      justifyContent: 'center',
  },
  email_text: {
    fontSize: 18,
    color: '#fff',
  }
});

module.exports = Account;
