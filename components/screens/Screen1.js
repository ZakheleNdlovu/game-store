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
            <Text style={styles.text}>Screen1</Text>
            <FlatList data={games} renderItem={({ item }) => {
                if (item.steamRatingPercent > 89) {
                    return (
                        <>
                            <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('Details1', { item: item })}>

                                <View style={{ marginRight: 10, width: '33%' }}>
                                    <Image source={{ uri: item.thumb }} width={140} height={54} />
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
            <View style={{ height: '6%', alignItems: 'center', justifyContent: 'center' }}>
                <Text>original</Text>
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
        color: 'gray',

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