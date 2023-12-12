import { StyleSheet, View, Text, SectionList } from 'react-native'
import React from 'react'

//Aqui se recebem as rotas que passam no ponto de ônibus que ficará o Totem
const DATA = [
    {
        data: ['105 Pegoreli Tarumãs Via Perequê', '107 Centro Via Rodoviaria', '108 Centro direto', '109 Centro Via Rodoviaria / ame', '117 Centro via Praias / pro-mulher']
    },
]

const colors = ['white', '#EEEEEE']

export default function BusLines({ value, ...rest }) {
    return (
        <View style={styles.tableBody}>
            <View style={styles.tableHeader}>
                <Text style={styles.text}>
                    Rotas
                </Text>
            </View>

            <View style={styles.table}>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => (
                        <View style={[styles.line, { backgroundColor: colors[index % colors.length] }]}>
                            <Text style={styles.lineText}>{item}</Text>
                        </View>
                    )}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    tableBody: {
        flex: 2,
        borderRadius: 15,
        backgroundColor: '#EEEEEE',
        
    },

    tableHeader: {
        backgroundColor: '#004A86',
        flex: 1,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },

    table: {
        flex: 4,
        borderRadius: 15,
        color: 'white'
    },

    line: {
        height: 85,
       // flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        backgroundColor: 'white',
    },

    text: {
        fontSize: 24,
        lineHeight: 30,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'white',
    },

    lineText: {
        fontSize: 24,
        lineHeight: 30,
        textTransform: 'uppercase',
        fontWeight: 'regular',
        color: '#707070',
    }
 
})