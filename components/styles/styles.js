'use strict';
import {Platform, StatusBar} from 'react-native';
var React = require('react-native');
var { StyleSheet } = React;

var styles = StyleSheet.create({

    root:{
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    },

    toolbar: {
        height: 56,
        width: '100%',
        backgroundColor: '#2196F3',
      },


    container: {
        flex: 1,
       flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'flex-start',
        padding: 10,
        backgroundColor: '#ffffff',
    },

    center: {
        flex: 1,
       flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'center',
        padding: 10,
    },

    contactDetail: {
        flex: 1,
       flexDirection: 'column',
       alignItems: 'center',
       marginRight:24,
       marginLeft:24
    },

    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },

    button: {
        height: 48,
        backgroundColor: '#2196F3',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },

    saveButton: {
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
    },

    newButton: {
        marginBottom: 0,
        borderRadius: 0,
    },

    contact: {
        marginTop: 100,
        flex: 1,
        padding: 10,
        backgroundColor: '#ffffff',
    },

    nama: {
        fontSize: 18,
        marginLeft: 5,
        marginTop: 2,
        color: '#222222',
    },

    organization: {
        marginLeft: 5,
        color: '#aaaaaa'
    },

    hr: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: 1,
        marginLeft: 0,
        marginRight: 0,
    },

    imgProfile: {
        marginTop:16,
        marginBottom:16,
        borderRadius: 100,
        width: 128,
        height: 128
      },

});


module.exports = styles;