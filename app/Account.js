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
        <TopBar style={styles.topBar} name="TopBar" />
        <View>
        {
          this.state.user &&
            <View>
              <View>
                <Text style={styles.email_text}>{this.state.user.password.email}</Text>
              </View>
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
        component: Home
      });
    });

  }

}

const styles = StyleSheet.create({
  email_container: {
    padding: 20
  },
  email_text: {
    fontSize: 18
  }
});

module.exports = Account;
