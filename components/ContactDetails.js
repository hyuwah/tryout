import styles from './styles/styles';
import React from 'react';
import { View, TouchableHighlight, Text, Image } from 'react-native';

class ContactDetails extends React.Component {
    static navigationOptions = {
        title: `Contact Detail`,
      };
    render() {
        const { item } = this.props.navigation.state.params;
        return (
          <View style={styles.contactDetail}>
            
            <Image source={require('../assets/img/noimg.png')} style={styles.imgProfile} />
            <View>
                <Text>First Name: {item.firstName}</Text>
                <Text>Last Name: {item.lastName}</Text>
                <Text>Organization: {item.organization}</Text>
                <Text>Phone: {item.phone}</Text>
                <Text>Address: {item.address}</Text>
                
                <Text></Text>
                
                <Text>JSON :{'\n'}{JSON.stringify(item)}</Text>
            </View>

          </View>
        );
      }
}

export default ContactDetails;