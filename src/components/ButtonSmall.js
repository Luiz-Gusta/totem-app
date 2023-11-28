import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ButtonSmall({value, ...rest} ) {
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
        height: 78,
        width: 180,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#004A86',
        alignItems: 'center',
        justifyContent: 'center'
    },

    text:{
        fontSize: 18,
        lineHeight: 30,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'white',
    }
})