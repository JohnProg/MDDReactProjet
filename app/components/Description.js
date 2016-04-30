import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
  ScrollView,
  TouchableOpacity,
  View
} from 'react-native';

var TopBar = require('./TopBar');

class Description extends Component {
    back(){
        this.props.navigator.pop({
            id: 'Account'
        })
    }
    // addList(){
    //     AsyncStorage.getItem('user_data').then((user_data))=>{
    //         var data;
    //         var URL = new Firebase('https://workpunchdev.firebaseio.com/aniList/users/' + data.auth.uid);
    //     }
    // }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topBar}>
                    <Image source={require('../assets/arrow.png')} />
                    <TouchableHighlight onPress={this.back.bind(this)}>
                        <Text style={styles.back}> Back </Text>
                    </TouchableHighlight>
                </View>
                <ScrollView
                ref={(scrollView) => { _scrollView = scrollView; }}
                automaticallyAdjustContentInsets={false}
                scrollEventThrottle={200}
                style={styles.scrollView}>
                    <View style={styles.content}>
                        <Text style={styles.textHeading}>
                            {this.props.passProps.title}
                        </Text>
                        <Text style={styles.textBody}>
                            {this.props.passProps.image}
                        </Text>
                        <Text style={styles.textH2}>Categories</Text>
                        <Text style={styles.textBody}>
                            {this.props.passProps.categories}
                        </Text>
                        <Text style={styles.textH2}>Upcoming</Text>
                        <Text style={styles.textBody}>
                            {this.props.passProps.day}d:
                            {this.props.passProps.hours}h:
                            {this.props.passProps.minutes}m:
                            {this.props.passProps.seconds}s
                        </Text>
                        <Text style={styles.textH2}>Description</Text>
                        <Text style={styles.textBody}>
                            {this.props.passProps.description}
                        </Text>
                        <TouchableOpacity onPress={this._onPressButton}>
                            <Text>ADD</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
       );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343535',
  },
  topBar: {
      flex: 1,
      backgroundColor: '#3D8491',
      flexDirection: 'row',
      alignItems: 'center',
  },
  content: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#343535',
  },
  textHeading : {
      color: '#fff',
      margin: 20,
      fontSize: 20,
      paddingLeft: 15,
      paddingRight: 15,
      fontWeight: 'bold',
      textAlign: 'center',
  },
  textH2: {
      color: '#fff',
      fontSize: 18,
      paddingLeft: 15,
      marginLeft: 20,
      fontWeight: 'bold',
      alignItems: 'center',
  },
  textBody: {
      color: '#fff',
      margin: 20,
      marginTop: 5,
      paddingLeft: 15,
      paddingRight: 15,
      fontSize: 15,
      alignItems: 'flex-start',
  },
  scrollView: {
      flex: 12,
      backgroundColor: '#343535',
      height: 200,
    },
   back: {
      flex: 1,
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      alignItems: 'center',
      justifyContent: 'flex-end'
  },

});

module.exports = Description;
