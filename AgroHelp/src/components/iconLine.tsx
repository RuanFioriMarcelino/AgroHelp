import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

function IconLine() {
    return (
        <View style={styles.lineContent}>
            <View style={styles.line} />
            <Text>Ou</Text>
            <View style={styles.line} />
        </View>
    )
}

const styles = StyleSheet.create({
    line: {
        borderWidth: 0.5,
        width: 146,
        height: 0,
        backgroundColor: '#BDBDBD',
        borderColor: '#BDBDBD'
    },
    lineContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 23,
    }
})

export { IconLine } 