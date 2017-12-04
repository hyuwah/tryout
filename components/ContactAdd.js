import styles from './styles/styles';
import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';

class ContactAdd extends React.Component {
  static navigationOptions = {
    title: `Add new contact`,
  };
    render() {
      const { params } = this.props.navigation.state;
        return (
          <View style={styles.center}>
            <Text>Not implemented yet</Text>
          </View>
        );
      }
}

export default ContactAdd;