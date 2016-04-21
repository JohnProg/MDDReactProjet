import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
  View
} from 'react-native';

class Desciption extends Component {


  render() {
    return (
      <View style={styles.container}>
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

});

module.exports = Desciption;
