import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Screen3 from './screens/Screen3';

const Drawer = createDrawerNavigator();
const Top = createMaterialTopTabNavigator()
const Stack = createNativeStackNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator drawerContent={(props) => (
            <DrawerContentScrollView {...props}>
                <View >
                    <View style={{ height: 250, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgray', marginBottom: 10, borderRadius: 10 }}>
                        <Ionicons name="game-controller" size={150} color="darkslategray" />
                        <Text >SkaterBoy Store.</Text>
                    </View>

                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        )}
            screenOptions={{ drawerActiveBackgroundColor: 'darkslategray', drawerActiveTintColor: 'white', }}

        >

            <Drawer.Screen name="Popular Games" component={StackNavigator1} options={{ drawerIcon: () => <Ionicons name='game-controller' size={30} color={'white'} /> }} />
            <Drawer.Screen name="All Games" component={StackNavigator2} options={{ drawerIcon: () => <Ionicons name='game-controller' size={30} color={'white'} /> }} />
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