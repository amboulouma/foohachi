import React, { Component } from 'react';
import {
    Platform, 
    StyleSheet,
    Text,
    View
  } from 'react-native';

export default class About extends Component<{}> {
    render() {
        return (
            <View style = {style.view} >
                <Text style = {style.title} >A propos de Foohachi</Text>
                <Text>
                        Lorem trium sententiarum nulli prorsus assentior.
                        Haec subinde Constantius audiens et quaedam
                        Restabat ut Caesar post haec properaret accitus et
                        Mensarum enim voragines et varias voluptatum
                        Sed (saepe enim redeo ad Scipionem, cuius omnis
                </Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    view: {
        margin: 20
    },
    title: {
        fontSize: 22, 
        marginBottom: 20
    }
})