/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
 'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  ListView,
  View
} from 'react-native';

// var api = require('../utility/api');

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

import Firebase from 'firebase';
// let url = new Firebase('anifan.firebaseio.com/aniList');
let app = new Firebase('geoquest.firebaseio.com/ActiveQuest/')
import AQList from './components/AQList'

class MainContent extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            descript: '',
            dataSource: ds,
        }
    }
    componentWillMount(){
        this.getAniList(app);
    }
    //
    _renderList(aniList) {
          return (
            <ListQuest aqlist={aqlist} onPress={() => {}} navigator= {this.props.navigator} />
          );
    }
    getAniList(app){
        url.on('value', (snap) => {
            // get children as an array
            var aqlist = [];
            snap.forEach((child) => {
                aniList.push({
                name: child.val().name,
                descript: child.val().descript,
                lat: child.val().markers.pin1.lat,
                long: child.val().markers.pin1.long,
                  _key: child.key()
                });
            });
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(aqlist)
            });
      });
  }
  render() {
    return (
      <View style={styles.container}>
          <ListView
              dataSource={this.state.dataSource}
              renderRow={this._renderList.bind(this)}
          />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },

});

module.exports = ActiveQuest;
