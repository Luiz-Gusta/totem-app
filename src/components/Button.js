import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button({value, ...rest} ) {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
        <Text style={styles.text}>
            {value}
        </Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    button:{
        height: 60,
        width: 294,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#004A86',
        alignItems: 'center',
        justifyContent: 'center'
    },

    text:{
        fontSize: 24,
        lineHeight: 30,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'white',

    }
})