import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Screen4 = () => {

    const [games, setGames] = useState([])
    const [games2, setGames2] = useState([])
    const [games3, setGames3] = useState([])

    const navigation = useNavigation()

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1')
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
        const fetchGames2 = async () => {
            try {
                const response = await fetch('https://www.cheapshark.com/api/1.0/deals?storeID=2')
                const data = await response.json()
                setGames2(data)
            }
            catch (err) {
                setError(err.message)
            }
            finally {
                setLoading(false)
            }
        }
        const fetchGames3 = async () => {
            try {
                const response = await fetch('https://www.cheapshark.com/api/1.0/deals?storeID=3')
                const data = await response.json()
                setGames3(data)
            }
            catch (err) {
                setError(err.message)
            }
            finally {
                setLoading(false)
            }
        }

        fetchGames()
        fetchGames2()
        fetchGames3()

        function combine() {
            setGames(games.concat(games3))
        }


    }, [])



    return (
        <View style={styles.container}>
            <View style={{ width: '98%', borderColor: 'black', borderWidth: 1, backgroundColor: 'lightgray', margin: 2, height: '5%', alignSelf: 'center', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ alignSelf: 'center', fontSize: 22, fontWeight: 'bold' }}>New</Text>
            </View>
            <View style={{ width: '98%', height: '25%', borderRadius: 10, alignSelf: 'center', marginBottom: 3, borderColor: 'darkslategray', borderWidth: 2, overflow: 'hidden' }}>
                <FlatList data={games2} horizontal renderItem={({ item }) => {
                    if (item.steamRatingPercent > 85) {
                        return (
                            <ImageBackground source={{ uri: item.thumb }} height={'100%'} width={190} borderRadius={10} style={{ margin: 4 }}>
                                <TouchableOpacity onPress={() => navigation.navigate('Details3', { item: item })}
                                    style={{ borderColor: 'black', borderWidth: 1, width: 115, height: '100%', backgroundColor: 'black', opacity: .7, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                                    <Text style={{ color: 'white', fontSize: 17, textAlign: 'center', fontWeight: 'bold' }}>{item.title}</Text>
                                </TouchableOpacity>
                            </ImageBackground>
                        )
                    }
                }} />
            </View>
            <View style={{ width: '98%', height: '5%', margin: 2, alignItems: 'center', alignSelf: 'center', justifyContent: 'center', backgroundColor: 'lightgray', borderRadius: 10, borderColor: 'black', borderWidth: 1 }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>All Games</Text>
            </View>
            <View style={{ borderColor: 'darkslategray', borderWidth: 1, width: '98%', height: '59%', alignSelf: 'center', overflow: 'hidden', borderRadius: 10, }}>
                <FlatList data={games3} renderItem={({ item }) => {
                    if (item.steamRatingPercent > 85) {
                        if (item.thumb.endsWith('jpg')) {
                            return (
                                <View>
                                    <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('Details3', { item: item })}>

                                        <View style={{ marginRight: 10, width: '33%', borderColor: 'black', borderWidth: 1, borderRadius: 10, overflow: 'hidden' }}>
                                            <Image source={{ uri: item.thumb }} width={'100%'} borderRadius={1} height={150} />
                                        </View>
                                        <View style={{ padding: 5, width: '67%' }}>
                                            <Text style={styles.text2}>{item.title}</Text>
                                            <Text style={{ alignSelf: 'flex-end', paddingRight: 5 }}> ⭐ {item.steamRatingPercent}/100</Text>
                                        </View>

                                    </TouchableOpacity>
                                </View>
                            )
                        }
                        else {
                            return (
                                <View>
                                    <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('Details3', { item: item })}>

                                        <View style={{ marginRight: 10, width: '33%', borderColor: 'black', borderWidth: 1, borderRadius: 10, overflow: 'hidden' }}>
                                            <Image source={{ uri: item.thumb }} width={'100%'} borderRadius={1} height={50} />
                                        </View>
                                        <View style={{ padding: 5, width: '67%' }}>
                                            <Text style={styles.text2}>{item.title}</Text>
                                            <Text style={{ alignSelf: 'flex-end', paddingRight: 5 }}> ⭐ {item.steamRatingPercent}/100</Text>
                                        </View>

                                    </TouchableOpacity>
                                </View>
                            )
                        }
                    }
                }} />
            </View>

            <View style={{ height: '5%', alignItems: 'center', }}>
                <Text>www.cheapshark.com</Text>
            </View>
        </View >
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

export default Screen4