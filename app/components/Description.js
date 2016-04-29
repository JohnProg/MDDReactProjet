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
                <TopBar style={styles.topBar} name="TopBar"/>
                <View style={styles.content}>
                    <ScrollView
                    ref={(scrollView) => { _scrollView = scrollView; }}
                    automaticallyAdjustContentInsets={false}
                    scrollEventThrottle={200}
                    style={styles.scrollView}>
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
                            {this.props.passProps.date}
                        </Text>
                        <Text style={styles.textH2}>Description</Text>
                        <Text style={styles.textBody}>
                            {this.props.passProps.description}
                        </Text>
                        <TouchableOpacity onPress={this._onPressButton}>
                            <Text>ADD</Text>
                        </TouchableOpacity>
                        <TouchableHighlight onPress={this.back.bind(this)}>
                            <Text style={styles.back}> Back </Text>
                        </TouchableHighlight>
                    </ScrollView>
                </View>
            </View>
       );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343535',
  },
  content: {
      flex: 12,
      justifyContent: 'center',
      alignItems: 'center',
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
  },
  textBody: {
      color: '#fff',
      margin: 20,
      marginTop: 5,
      paddingLeft: 15,
      paddingRight: 15,
      fontSize: 15,
  },
  scrollView: {
      backgroundColor: '#343535',
      height: 300,
    },
    back: {
      color: '#fff',
    }
});

module.exports = Description;
