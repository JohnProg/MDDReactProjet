/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
 'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
  AsyncStorage,
  ListView,
  View
} from 'react-native';

// var api = require('../utility/api');

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

import Firebase from 'firebase';
let url = new Firebase('anifan.firebaseio.com/aniList');
const ListAnime = require('./ListAnime');

class MainContent extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: "",
            image: "",
            categories: "",
            date: "",
            hours: "",
            minutes: "",
            seconds: "",
            description: "",
            dataSource: ds,
        }
    }
    componentWillMount(){
        this.getAniList(url);
    }
    //
    _renderList(aniList) {
          return (
            <ListAnime aniList={aniList} onPress={() => {}} navigator= {this.props.navigator} />
          );
    }
    getAniList(url){
        url.on('value', (snap) => {
            // get children as an array
            var aniList = [];
            snap.forEach((child) => {
                aniList.push({
                title: child.val().title,
                categories: child.val().categories,
                description: child.val().description,
                day: child.val().upcoming.days,
                hours: child.val().upcoming.hours,
                minutes: child.val().upcoming.minutes,
                seconds: child.val().upcoming.seconds,
                  _key: child.key()
                });
            });
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(aniList)
            });
      });
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.searchField}>
              <TextInput style={styles.textField}
                  onChangeText={(text) => this.setState({text})}
                  placeholder='Search'
              />
              <Image source={require('../assets/Search.png')} style={{top: 3, right: 40}}/>
          </View>
          <View style={styles.content}>
              <ListView
                  dataSource={this.state.dataSource}
                  renderRow={this._renderList.bind(this)}
              />
          </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#343535',
  },
  searchField: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start',
      paddingTop: 20,
      paddingLeft: 40,
  },
  content: {
      flex: 11,
  },
  textField: {
      width: 250,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      backgroundColor: '#fff',
      borderRadius: 7,
      fontSize: 18,
      paddingLeft: 20,
  },
});

module.exports = MainContent;
