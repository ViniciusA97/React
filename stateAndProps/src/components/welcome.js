import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import styles from '../styles/stl';

export default class welcome extends Component {
    render() {
        return (
            <View style ={styles.container}>
                <Text style = {styles.texto}>
                    {this.props.titulo}
                </Text>
                <Text style = {styles.texto}> 
                    {this.props.slogan}
                </Text>
            </View>
        )
    }
}

