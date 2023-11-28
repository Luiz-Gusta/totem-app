import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Theme } from './Theme'

export default function Button({value, btType, btColor, textColor='white', ...rest} ) {
  return (
    <TouchableOpacity style={styles.button(btType, btColor)} {...rest}>
        <Text style={styles.text(textColor)}>
            {value}
        </Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    button: (btType, btColor) => ({
        height: Theme.btHeight[btType],
        width: Theme.btWidth[btType],
        padding: 10,
        borderRadius: 5,
        backgroundColor: Theme.colors[btColor],
        alignItems: 'center',
        justifyContent: 'center'
    }),

    text: (textColor) =>({
        fontSize: 24,
        lineHeight: 30,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: Theme.colors[textColor],
    })
})