import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { TextInitial } from "../components/textInitial";
import { Input } from '../components/input';
import { ButtonFilter } from '../components/buttonFilter';
import Product from '../components/product';

export default function Shop() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.nav}>
                <View style={{ height: 60 }}>
                    <TextInitial.Arrow title="Compra e venda" />
                </View>
                <Input.Field style={styles.input}
                    placeholder="O que você procura?"
                    placeholderTextColor="#FFFFFF" />
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                    <View style={styles.contentScrollView}>
                        <ButtonFilter title='Adubo' />
                        <ButtonFilter title='Ração' />
                        <ButtonFilter title='Sementes' />
                        <ButtonFilter title='Ferramentas' />
                        <ButtonFilter title='Ferramentas' />
                    </View>
                </ScrollView>
            </View>

            <View style={styles.viewProduct}>
                <View style={styles.scrollProduct}>
                    <Text style={styles.textProduct}>Adubo</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollViewProduct}>
                        <View style={styles.contentScrollView}>
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.scrollProduct}>
                    <Text style={styles.textProduct}>Adubo</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollViewProduct}>
                        <View style={styles.contentScrollView}>
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 28,
        backgroundColor: 'white',
    },
    nav: {
        flex: 2,
        alignItems: 'center',
        backgroundColor: '#8AC12680',
        maxHeight: 160
    },
    scrollView: {
        position: 'absolute',
        bottom: -40,
        padding: 22
    },
    contentScrollView: {
        flexDirection: 'row',
        gap: 20,
    },
    input: {
        height: 52,
        width: 271,
        backgroundColor: '#67980D',
        borderRadius: 50,
        padding: 12,
        color: "#FFFFFF",
        fontWeight: "400",
        fontSize: 16,
        textAlign: 'center'
    },
    viewProduct: {
        marginTop: 30,
        padding: 10,
        rowGap: 20,
        flex: 2
    },
    scrollProduct: {
    },
    textProduct: {
        width: 66,
        backgroundColor: "#67980D",
        color: '#FFFFFF',
        borderRadius: 50,
        padding: 8,
        textAlign: 'center',
        marginBottom: 15
    }

})