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
                const response = await fetch('https://www.cheapshark.com/api/1.0/deals?storeID=3')
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
            <Text style={{ alignSelf: 'center', fontSize: 22, fontWeight: 'bold', height: '5%', paddingTop: 5, backgroundColor: 'lightgray', width: '98%', borderRadius: 10, padding: 5, borderColor: 'black', borderWidth: 1, marginBottom: 4 }}>Gamer's best picks</Text>
            <View style={styles.box2}>
                <FlatList data={games} horizontal renderItem={({ item }) => {


                    if (item.steamRatingPercent == 0) {
                        return (
                            <>
                                <TouchableOpacity onPress={() => navigation.navigate('Details1', { item: item })}>

                                    <View style={{ marginRight: 10, }}>
                                        <Image source={{ uri: item.thumb }} width={115} borderRadius={10} height={'100%'} style={{ borderColor: 'black', borderWidth: 1 }} />
                                    </View>


                                </TouchableOpacity>
                            </>
                        )
                    }

                }} />
            </View>
            <Text style={{ alignSelf: 'center', fontSize: 22, fontWeight: 'bold', padding: 5, marginBottom: 5, backgroundColor: 'gray', borderRadius: 10, width: '98%', borderColor: 'black', borderWidth: 1, height: '5%' }}>Best Of The Week</Text>
            <View style={{ borderColor: 'darkslategray', borderWidth: 1, width: '98%', alignSelf: 'center', height: '59%', overflow: 'hidden', borderRadius: 10, backgroundColor: 'lightgray' }}>
                <FlatList data={games} renderItem={({ item }) => {
                    if (item.thumb.endsWith('jpg')) {
                        return (
                            <>
                                <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('Details1', { item: item })}>

                                    <View style={{ marginRight: 10, width: '35%' }}>
                                        <Image source={{ uri: item.thumb }} width={'100%'} borderRadius={10} height={144} />
                                    </View>
                                    <View style={{ padding: 5, width: '65%' }}>
                                        <Text style={styles.text2}>{item.title}</Text>
                                        <Text style={{ alignSelf: 'flex-end', paddingRight: 5 }}> ⭐ {item.steamRatingPercent}/100</Text>
                                    </View>

                                </TouchableOpacity>
                            </>
                        )
                    }
                    else {
                        return (
                            <>
                                <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('Details1', { item: item })}>

                                    <View style={{ marginRight: 10, width: '35%' }}>
                                        <Image source={{ uri: item.thumb }} width={'100%'} borderRadius={10} height={44} />
                                    </View>
                                    <View style={{ padding: 5, width: '65%' }}>
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
        backgroundColor: 'lightgray',
        borderRadius: 10,
        borderColor: 'darkslategray',
        borderWidth: 1,
        marginBottom: 4,
        height: '25%',
        width: '98%',
        alignSelf: 'center'
    }
})

export default Screen1