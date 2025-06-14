import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, } from 'react'
import { useNavigation } from '@react-navigation/native'

const Screen1 = () => {

    const navigation = useNavigation()
    const [games, setGames] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15')
                const data = await response.json()
                setGames(data)
            }
            catch (err) {
                setError(err.message)
            }
            finally {
                setLoading(false)
            }
        }
        fetchGames()
    }, [])
    return (
        <View style={styles.container}>
            <Text style={{ alignSelf: 'center', fontSize: 22, fontWeight: 'bold', height: '5%', paddingTop: 5, backgroundColor: 'tomato', width: '98%', borderRadius: 10, padding: 5, borderColor: 'black', borderWidth: 1, marginBottom: 4 }}>Gamer's best picks</Text>
            <View style={styles.box2}>
                <FlatList data={games} renderItem={({ item }) => {

                    if (item.steamRatingPercent > 95) {
                        return (
                            <>
                                <TouchableOpacity style={styles.row1} onPress={() => navigation.navigate('Details1', { item: item })}>

                                    <View style={{ marginRight: 10, width: '33%' }}>
                                        <Image source={{ uri: item.thumb }} width={'100%'} borderRadius={10} height={54} />
                                    </View>
                                    <View style={{ padding: 5, width: '67%' }}>
                                        <Text style={styles.text3}>{item.title}</Text>
                                        <Text style={{ alignSelf: 'flex-end', paddingRight: 5, color: 'white' }}> ⭐ {item.steamRatingPercent}/100</Text>
                                    </View>

                                </TouchableOpacity>
                            </>
                        )
                    }
                }} />
            </View>
            <Text style={{ alignSelf: 'center', fontSize: 22, fontWeight: 'bold', padding: 5, marginBottom: 5, backgroundColor: 'lightgreen', borderRadius: 10, width: '98%', borderColor: 'black', borderWidth: 1, height: '5%' }}>Popular Games</Text>
            <View style={{ borderColor: 'darkslategray', borderWidth: 1, width: '98%', alignSelf: 'center', height: '64%', overflow: 'hidden', borderRadius: 10, backgroundColor: 'lightblue' }}>
                <FlatList data={games} renderItem={({ item }) => {

                    if (item.steamRatingPercent > 89) {
                        return (
                            <>
                                <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('Details1', { item: item })}>

                                    <View style={{ marginRight: 10, width: '33%' }}>
                                        <Image source={{ uri: item.thumb }} width={'100%'} borderRadius={10} height={54} />
                                    </View>
                                    <View style={{ padding: 5, width: '67%' }}>
                                        <Text style={styles.text2}>{item.title}</Text>
                                        <Text style={{ alignSelf: 'flex-end', paddingRight: 5 }}> ⭐ {item.steamRatingPercent}/100</Text>
                                    </View>

                                </TouchableOpacity>
                            </>
                        )
                    }
                }} />
            </View>
            <View style={{ alignItems: 'center', height: '5%' }}>
                <Text>www.cheapshark.com</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
    },
    text2: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',

    },
    text3: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',

    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        width: '100%',
        borderColor: 'darkslategray',
        borderBottomWidth: 1,
        marginBottom: 10,

    },
    row1: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        width: '100%',
        borderColor: 'gray',
        borderBottomWidth: 1,

        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowRadius: 5
    },
    box2: {
        backgroundColor: 'white',
        padding: 5,
        backgroundColor: 'darkslategray',
        borderRadius: 10,
        borderColor: 'darkslategray',
        borderWidth: 1,
        marginBottom: 4,
        height: '20%',
        width: '98%',
        alignSelf: 'center'
    }
})

export default Screen1