import { StyleSheet, View, Text, SectionList } from 'react-native'
import React from 'react'

const DATA = [
    {
        data: ['108 Centro direto', '107 Centro Via Rodoviaria', '109 Centro Via Rodoviaria / ame', '117 Centro via Praias / pro-mulher']
    },
]

export default function BusLines({ value, ...rest }) {
    return (
        <View style={styles.tableBody}>
            <View style={styles.tableHeader}>
                <Text style={styles.text}>
                    Próximas linhas
                </Text>
            </View>

            <View style={styles.table}>
                <SectionList
                    style={{ flex: 1 }}
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        <View style={styles.line}>
                            <Text style={styles.lineText}>{item}</Text>
                        </View>
                    )}
                />
            </View>

        </View>
    )
}

/*

            <View style={styles.table}>
                <View style={styles.line}>
                    <Text style={styles.lineText}>Linha 108 Centro Direto</Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.lineText}>Linha 107 Centro Via Rodoviária</Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.lineText}>Linha 109 Centro Via Rodoviária / AME</Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.lineText}>Linha 117 Centro Via Praias / Pro-Mulher</Text>
                </View>
            </View>
*/

const styles = StyleSheet.create({
    tableBody: {
        flex: 2,
        borderRadius: 15,
        backgroundColor: '#EEEEEE',
        //alignItems: 'center',
        //justifyContent: 'center'
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