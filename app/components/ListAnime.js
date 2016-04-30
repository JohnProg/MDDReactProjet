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

import Firebase from 'firebase';
// let url = new Firebase('anifan.firebaseio.com/aniList'+uid);

class ListAnime extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title: "",
            image: "",
            categories: "",
            day: "",
            hours: "",
            minutes: "",
            seconds: "",
            description: "",
        }
    }
    animeDetails(){
       this.props.navigator.push({
         id: 'Description',
         passProps: {
             title: this.props.aniList.title,
             image: 'Image Example',
             categories: this.props.aniList.categories,
             day: this.props.aniList.day,
             hours: this.props.aniList.hours,
             minutes: this.props.aniList.minutes,
             seconds: this.props.aniList.seconds,
             description: this.props.aniList.description
         }
       });
     }
  render() {
      console.log(this.props.aniList.description);
    return (
      <TouchableHighlight onPress={ this.animeDetails.bind(this) }>
        <View style={styles.container}>
          <Text style={styles.apiText}>{this.props.aniList.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}


const styles = StyleSheet.create({
  apiText: {
      fontFamily: 'Chewy',
      color: '#fff',
      paddingTop: 15,
      fontSize: 16,
  },
});
module.exports = ListAnime;
