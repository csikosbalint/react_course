import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FoodList from './FoodList';
import { fetchFood } from '../actions'
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

const Stack = createStackNavigator();

function Main(props) {
    React.useEffect(() => {
        props.fetchFood()
    }, [])
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="FoodList">
                <Stack.Screen name="FoodList" options={{ title: 'All foods available' }}>
                    {nav => {
                        return (
                            props.requesting
                                ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Text>Loading...</Text></View>
                                : <FoodList food={props.food} {...nav} />
                        )
                    }}
                </Stack.Screen>
                <Stack.Screen name="FoodVegan" options={{ title: 'Only vegan foods' }} >
                {nav => {
                    return (
                        props.requesting
                            ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Text>Loading...</Text></View>
                            : <FoodList food={props.food} {...nav} vegan/>
                    )
                }}
                </Stack.Screen>
                <Stack.Screen name="FoodFFree" options={{ title: 'Only fat free foods' }}>
                {nav => {
                    return (
                        props.requesting
                            ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Text>Loading...</Text></View>
                            : <FoodList food={props.food} {...nav} ffree/>
                    )
                }}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const mapStateToProps = (state => (
    {
        food: state.food.data,
        requesting: state.food.requesting,
        error: state.food.error,
    })
);

const mapDispatchToProps = {
    fetchFood
};


export default connect(mapStateToProps, mapDispatchToProps)(Main)