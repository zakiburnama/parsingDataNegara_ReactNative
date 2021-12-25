import React from "react";
import { FlatList, Text, TouchableHighlight, View, ToastAndroid, StyleSheet,} from 'react-native';
import MapView from 'react-native-maps';


export default function DetailScreen({route}) {

    const{ nama, ibukota, kode, lat, lang } = route.params;
    
    return (
        <View style={styles.body}>
            <Text style={styles.text}> { nama } </Text>
            <Text> { ibukota } </Text>
            <Text> { kode } </Text>
            <Text> { lat } </Text>
            <Text> { lang } </Text>
            
            <MapView
                style={styles.map}
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

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        margin: 10,
    },
    map: {
        width: '100%',
        height: '100%',
    }
})