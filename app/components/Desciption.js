import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
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
            <Text>
                {this.props.passProps.title}
            </Text>
            <Text>
                {this.props.passProps.image}
            </Text>
            <Text>
                {this.props.passProps.categories}
            </Text>
            <Text>
                Upcoming
                {this.props.passProps.date}
            </Text>
            <Text>
                Desciption
                {this.props.passProps.desciption}
            </Text>
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
  }


});

module.exports = Desciption;
