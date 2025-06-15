import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { DrawerActions, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';

const Drawer = createDrawerNavigator();
const Top = createMaterialTopTabNavigator()
const Stack = createNativeStackNavigator();


function DrawerNavigator() {

    const navigation = useNavigation()
    return (
        <Drawer.Navigator drawerContent={(props) => (
            <DrawerContentScrollView {...props}>
                <View style={{ height: '90%' }}>
                    <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightblue', marginBottom: 10, borderRadius: 30, padding: 10 }}>
                        <Ionicons name="person" size={65} color="darkslategray" />
                        <Text >SkaterBoy Store.</Text>
                    </View>

                </View>
                <View style={{ height: '100%', marginTop: 10, backgroundColor: 'lightgray', borderRadius: 30, marginBottom: 10 }}>
                    <DrawerItemList {...props} />

                </View>
                <View style={{ alignItems: 'center', padding: 10, backgroundColor: 'purple', borderRadius: 30 }}>
                    <Text style={{ color: 'white' }}>www.cheapshark.com</Text>
                </View>

            </DrawerContentScrollView>
        )}
            screenOptions={{
                drawerActiveBackgroundColor: 'darkslategray', drawerActiveTintColor: 'white', headerLeft: () =>
                    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())} >
                        <Ionicons name='menu' size={30} color={'darkslategray'} style={{ marginLeft: 5 }} />
                    </TouchableOpacity>

            }}

        >

            <Drawer.Screen name="Popular Games" component={StackNavigator1} options={{ drawerIcon: () => <Ionicons name='game-controller' size={30} color={'orange'} /> }} />
            <Drawer.Screen name='Highest Rated' component={StackNavigator3} options={{ drawerIcon: () => <Ionicons name='game-controller' size={30} color={'red'} /> }} />
            <Drawer.Screen name="Games" component={StackNavigator2} options={{ drawerIcon: () => <Ionicons name='game-controller' size={30} color={'blue'} /> }} />
        </Drawer.Navigator>
    );
}

function StackNavigator1() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Top Games" component={Screen1} options={{ headerShown: false }} />
            <Stack.Screen name="Details1" component={Screen3} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

function StackNavigator3() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Top1 Games" component={Screen4} options={{ headerShown: false }} />
            <Stack.Screen name="Details3" component={Screen3} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

function StackNavigator2() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="All Games" component={Screen2} options={{ headerShown: false }} />
            <Stack.Screen name="Details2" component={Screen3} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const Navigators = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    )
}

export default Navigators