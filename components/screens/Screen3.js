import { View, Text, FlatList, ScrollView, Image, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const Screen3 = () => {

    const route = useRoute()
    const { item } = route.params

    return (
        <>
            <ImageBackground source={{ uri: item.thumb }} style={{ width: '100%', height: 200, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: 'black', padding: 10, borderRadius: 10, opacity: 0.7, width: '100%', height: 200, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>{item.title}</Text>
                </View>
            </ImageBackground>
            <ScrollView scrollEnabled={true}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center' }}>{item.title}</Text>
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
            </ScrollView>
        </>
    )
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
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        shadowColor: 'darkslategray',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .4,
        shadowRadius: 4,
        elevation: 9,
    }
})

export default Screen3