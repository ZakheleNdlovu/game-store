import { View, Text, FlatList, ScrollView, Image, ImageBackground, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'


const Screen3 = () => {

    const route = useRoute()
    const { item } = route.params
    const navigation = useNavigation()

    if (item.thumb.endsWith('jpg')) {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', height: '95%', }}>
                <View style={{ overflow: 'hidden', borderRadius: 10, width: '98%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                    <ImageBackground source={{ uri: item.thumb }} style={{ width: '100%', height: 400, }}>
                        <View style={{ backgroundColor: 'darkslategray', padding: 10, opacity: 0.7, width: '100%', height: 400, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>{item.title}</Text>
                        </View>
                    </ImageBackground>
                </View>
                <ScrollView scrollEnabled={true}>
                    <View style={{ width: '98%', backgroundColor: 'lightgray', alignSelf: 'center', borderRadius: 10, padding: 5, marginTop: 5, borderColor: 'black', borderWidth: 1 }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>{item.title}</Text>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.row}>
                            <Text style={styles.details}>Rating:</Text>
                            <Text style={styles.details2}>⭐ {item.steamRatingPercent} ({item.steamRatingCount} ratings)</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.details}>Price: </Text>
                            <Text style={styles.details2}> $ {item.normalPrice} (save ${item.salePrice}!)</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.details}>Deal Rating:</Text>
                            <Text style={styles.details2}>⭐ {item.dealRating}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.details}>Review:  </Text>
                            <Text style={styles.details2}> {item.steamRatingText}</Text>
                        </View>
                    </View>
                    <View style={{ height: 50, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                        <Button title="Go Back" onPress={() => navigation.goBack()} color='darkslategray' />
                    </View>
                </ScrollView>

            </View>
        )
    }
    else {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', height: '95%', }}>
                <View style={{ overflow: 'hidden', borderRadius: 10, width: '98%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                    <ImageBackground source={{ uri: item.thumb }} style={{ width: '100%', height: 130, }}>
                        <View style={{ backgroundColor: 'darkslategray', padding: 10, opacity: 0.7, width: '100%', height: 130, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>{item.title}</Text>
                        </View>
                    </ImageBackground>
                </View>
                <ScrollView scrollEnabled={true}>
                    <View style={{ width: '98%', backgroundColor: 'lightgray', alignSelf: 'center', borderRadius: 10, padding: 5, marginTop: 5, borderColor: 'black', borderWidth: 1 }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>{item.title}</Text>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.row}>
                            <Text style={styles.details}>Rating:</Text>
                            <Text style={styles.details2}>⭐ {item.steamRatingPercent} ({item.steamRatingCount} ratings)</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.details}>Price: </Text>
                            <Text style={styles.details2}> $ {item.normalPrice} (save ${item.salePrice}!)</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.details}>Deal Rating:</Text>
                            <Text style={styles.details2}>⭐ {item.dealRating}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.details}>Review:  </Text>
                            <Text style={styles.details2}> {item.steamRatingText}</Text>
                        </View>
                    </View>
                    <View style={{ height: 50, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                        <Button title="Go Back" onPress={() => navigation.goBack()} color='darkslategray' />
                    </View>
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    details: {
        fontSize: 20,
        padding: 10,
        color: 'darkslategray',
        textAlign: 'justify',
        fontWeight: 'bold'
    },
    details2: {
        fontSize: 20,
        padding: 10,
        color: 'dimgray',
        textAlign: 'justify',
        fontWeight: 'bold'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    box: {
        backgroundColor: 'lightgreen',
        padding: 10,
        alignSelf: 'center',
        borderRadius: 10,
        shadowColor: 'darkslategray',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .4,
        shadowRadius: 4,
        elevation: 9,
        width: '98%',
        marginTop: 5
    }
})

export default Screen3