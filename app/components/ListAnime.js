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
            date: "",
            desciption: "",
        }
    }
    animeDetails(){
       this.props.navigator.push({
         id: 'Desciption',
         passProps: {
             title: this.props.aniList.title,
             image: 'Image Example',
             categories: this.props.aniList.categories,
             date: this.props.aniList.upcoming,
             desciption: this.props.aniList.desciption
         }
       });
     }
  render() {
      console.log("----aniList----",this.props.aniList.title);
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
  container: {
    flex: 1,
  },
  apiText: {
      fontFamily: 'Chewy',
      color: '#fff',
  },
});
module.exports = ListAnime;
