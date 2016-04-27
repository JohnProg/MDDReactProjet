import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
  ScrollView,
  View
} from 'react-native';

var TopBar = require('./TopBar');

class Desciption extends Component {
    onPush(){
        this.props.navigator.pop({
            id: 'Account'
        })
    }

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
                <Text style={styles.textBody}>
                    {this.props.passProps.categories}
                </Text>
                <Text style={styles.textBody}>
                    Upcoming
                    {this.props.passProps.date}
                </Text>
                <Text style={styles.textBody}>
                    Desciption
                    {this.props.passProps.desciption}
                </Text>
            </ScrollView>
        </View>
        <TouchableHighlight onPress={this.onPush.bind(this)}>
            <Text> Back </Text>
        </TouchableHighlight>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#343535',
  },
  content: {
      flex: 12,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#343535',
  },
  textHeading : {
      flex: 1,
      color: '#fff',
      margin: 20,
      fontSize: 20,
      fontWeight: '600',
      alignItems: 'center',
  },
  textBody: {
      color: '#fff',
      margin: 20,
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: 16,
  },
  scrollView: {
      backgroundColor: '#343535',
      height: 300,
    },

});

module.exports = Desciption;
