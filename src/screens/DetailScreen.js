import React from "react";
import { FlatList, Text, TouchableHighlight, View, ToastAndroid, } from 'react-native';
import MapView from 'react-native-maps';


export default function DetailScreen({route}) {

    const{ nama, ibukota, kode, lat, lang } = route.params;
    
    return (
        <View style= {{flex: 1, alignItems: 'center'}}>
            <Text> { nama } </Text>
            <Text> { ibukota } </Text>
            <Text> { kode } </Text>
            <Text> { lat } </Text>
            <Text> { lang } </Text>

            <MapView
                initialRegion={{
                latitude: lat,
                longitude: lang,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
            />

        </View>
    )
}