import styles from './styles/styles'
import React from 'react';
import {
    Text, View, TouchableHighlight
} from 'react-native';

class ContactListItem extends React.Component {
    constructor(){
        super();
    }
    static navigationOptions = ({ navigation }) => ({
        title: `Contact : ${navigation.state.params.user}`,
      });
    render() {
        var item = this.props.item;
        return (
            <View>
                <TouchableHighlight
                    onPress={this.props.onPress}
                    onLongPress={this.props.onLongPress}>
                    <View style={styles.container}>
                        <Text
                            style={[styles.nama]}>
                            {item.firstName+' '+item.lastName}
                        </Text>
                        <Text
                            style={[styles.organization]}>
                            {item.organization}
                        </Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.hr}/>
            </View>
        );
    }
}

module.exports = ContactListItem;