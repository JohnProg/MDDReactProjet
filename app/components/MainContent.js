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
  Image,
  View
} from 'react-native';

class MainContent extends Component {

    constructor(props){
    super(props);
    this.state = {
        id: "",
        title: "",
        image: "",
        categories: "",
        date: "",
        desciption: ""
    }
}

    animeDetails(){
       this.props.navigator.push({
         id: 'Desciption',
         passProps: {
             title: 'Title Example',
             image: 'Image Example',
             categories: 'Categories',
             date: 'Upcoming Date',
             desciption: 'Desciption'
         }
       });
     }

  render() {
    return (
      <View style={styles.container}>
        <View tyle={styles.searchField}>    
              <TextInput style={styles.textField}
                  // <Image source={require('../assets/Search.png')} />
                  onChangeText={(text) => this.setState({text})}
              />
          </View>
          <TouchableHighlight onPress={ this.animeDetails.bind(this) }>
            <Text>
                This should hold the api information
            </Text>
          </TouchableHighlight>


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
      alignItems: 'flex-start'
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
});

module.exports = MainContent;
