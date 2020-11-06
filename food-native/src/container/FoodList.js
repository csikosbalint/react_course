import React from 'react'
import { View, Text, Button } from 'react-native'

export default function FoodList({navigation, food, vegan, ffree }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            { food
                .filter( f => {
                    if (vegan) {
                        return f.vegan === true
                     }
                     return true
                } )
                .filter( f => {
                    if (ffree) {
                        return f.fatfree === true
                     }
                     return true
                } )
                .map(f => <Text key={f._id}>{f.name}</Text>)
            }
            <Button
                title="Go to vegan foods"
                onPress={() => navigation.navigate('FoodVegan')}
            />
            <Button
                title="Go to fatfree foods"
                onPress={() => navigation.navigate('FoodFFree')}
            />
        </View>
    )
}