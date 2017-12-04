import React from 'react';
import {StyleSheet, Text, View, AppRegistry, Button, 
        ScrollView, ListView, TouchableHighlight, 
        ToolbarAndroid, Alert
        } from 'react-native';
import styles from './styles/styles'
import {StackNavigator} from 'react-navigation';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import ContactAdd from './ContactAdd';
import getData from './dataDummy'

 
class ContactsContainer extends React.Component {
    static navigationOptions = {
        title: 'Contacts App',
      };
    constructor() {
        super();
        this.state = {
            items: getData()
        };
        this.quickMenu = this.quickMenu.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        // this.updateItem = this.updateItem.bind(this);

    }

    quickMenu(rowData, rowID) {
        Alert.alert(
            'Quick Menu',
            null,
            [
                {text: 'Delete', onPress: () => this.deleteItem(rowID)},
                {text: 'Edit', onPress: () => {Alert.alert('Not implemented yet',null)}},
                {text: 'Cancel'}
            ]
        )
    }

    deleteItem(index) {
        Alert.alert('Are you sure?',null,[
            {text:'Yes', onPress:()=>{
                var items = this.state.items;
                items.splice(index, 1);
                this.setState({items: items})
            }},
            {text:'No'}
        ])
        
    }

    // updateItem(item, index) {
    //     var items = this.state.items;
    //     if (index) {
    //         items[index] = item;
    //     }
    //     else {
    //         items.push(item)
    //     }
    //     this.setState({items: items});
    //     this.props.pop();
    // }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex:1}}>
                <ContactList
                    items={this.state.items}
                    onPressItem={(rowData,rowID)=>navigate('ContactDetails',{item:rowData, id:rowID})}
                    onLongPressItem={this.quickMenu}/>
                <TouchableHighlight
                    style={[styles.button, styles.newButton]}
                    underlayColor='#99d9f4'
                    onPress={() => navigate('ContactAdd')}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
 
  

const ContactsApp = StackNavigator({
    Home: {screen: ContactsContainer },
    ContactDetails: {screen: ContactDetails},
    ContactAdd: {screen: ContactAdd}
  })

module.exports = ContactsApp;