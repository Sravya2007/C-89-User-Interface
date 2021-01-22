import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';

export default class CustomSideBarMenu extends Component {
    render() {
        return(
            <View style = {{
                flex: 1
            }}>
                <View style = {{
                    flex: 0.8
                }}>
                    <DrawerItems {...this.props}/>
                </View>
                <View style = {{
                    justifyContent: 'flex-end',
                    flex: 0.2,
                    paddingBottom: 30
                }}>
                    <TouchableOpacity
                    onPress = {() =>{
                        this.props.navigation.navigate('WelcomeScreen')
                        firebase.auth().signOut()
                    }} style = {{
                        height: 30,
                        width: '100%',
                        justifyContent: 'center',
                        padding: 10
                    }}>
                        <Text style = {{
                            fontSize: 30,
                            fontWeight: 'bold'
                        }}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}