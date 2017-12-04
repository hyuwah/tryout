import styles from './styles/styles';
import React from 'react';
import { View, TouchableHighlight, Text, Alert, Button, TextInput, ToastAndroid} from 'react-native';
import { NavigationActions } from 'react-navigation'

class ContactAdd extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName:'',
      lastName:'',
      organization:'',
      phone:'',
      address:''
    }
    
    this.addUser = this.addUser.bind(this);

}
  static navigationOptions = {
    title: `Add new contact`,
  };

  addUser() {
    var items = this.props.navigation.state.params.items;
    
    if(this.state.firstName === '' || this.state.lastName === '' || this.state.organization === ''){
      ToastAndroid.show('It\'s empty..', ToastAndroid.SHORT);
      return;
    }
    
    var newContact = {
      firstName : this.state.firstName,
      lastName : this.state.lastName,
      organization : this.state.organization,
      phone : this.state.phone,
      address : this.state.address,
    }
    items.push(newContact)
    ToastAndroid.show('Contact has been added', ToastAndroid.SHORT);
    
    
    // Auto-back to contact list
    const backAction = NavigationActions.back({
      key: null
    })
    this.props.navigation.dispatch(backAction)
  }

  focusNextField(nextField) {
       this.refs[nextField].focus();
      }

    render() {
      const { params } = this.props.navigation.state;
        return (
          <View style={styles.centerTop}>
            
            <View style={{flex:1,alignSelf:'stretch'}}>

            <TextInput
             ref="1"
        style={{height: 40}}
        onChangeText={(firstName) => this.setState({firstName})}
        value={this.state.firstName}
        placeholder={'First Name'}
        returnKeyType={'next'}
        autoCapitalize={'words'}
        onSubmitEditing={() => this.focusNextField('2')}
      />
      <TextInput
      ref="2"
        style={{height: 40}}
        onChangeText={(lastName) => this.setState({lastName})}
        value={this.state.lastName}
        placeholder={'Last Name'}
        returnKeyType={'next'}
        autoCapitalize={'words'}
        onSubmitEditing={() => this.focusNextField('3')}
      />
      <TextInput
      ref="3"
        style={{height: 40}}
        onChangeText={(organization) => this.setState({organization})}
        value={this.state.organization}
        placeholder={'Organization'}
        returnKeyType={'next'}
        onSubmitEditing={() => this.focusNextField('4')}
      />
      <TextInput
      ref="4"
        style={{height: 40,}}
        onChangeText={(phone) => this.setState({phone})}
        value={this.state.phone}
        placeholder={'Phone Number'}
        keyboardType={'phone-pad'}
        returnKeyType={'next'}
        onSubmitEditing={() => this.focusNextField('5')}
      />
      <TextInput
      ref="5"
        style={{height: 80}}
        multiline = {true}
        numberOfLines = {4}
        onChangeText={(address) => this.setState({address})}
        value={this.state.address}
        placeholder={'Address'}
      />
      </View>
      
            <Button onPress={this.addUser} title="Add User"/>
          </View>
        );
      }
}

export default ContactAdd;