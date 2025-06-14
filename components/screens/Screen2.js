import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Screen1 = () => {

    const [games, setGames] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation()

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
            <Text style={{ alignSelf: 'center', fontSize: 22, fontWeight: 'bold', height: '5%', paddingTop: 5, backgroundColor: 'tomato', width: '98%', borderRadius: 10, padding: 5, borderColor: 'black', borderWidth: 1, marginBottom: 4 }}>All GAMES</Text>
            <View style={{ borderColor: 'darkslategray', borderWidth: 1, width: '98%', height: '90%', alignSelf: 'center', overflow: 'hidden', borderRadius: 10, backgroundColor: 'pink' }}>
                <FlatList data={games} renderItem={({ item }) => {
                    return (
                        <>
                            <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('Details2', { item: item })}>

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
                }} />
            </View>

            <View style={{ height: '5%', alignItems: 'center', }}>
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
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        width: '100%',
        borderColor: 'darkslategray',
        borderBottomWidth: 1,
        marginBottom: 10,

    }
})

export default Screen1