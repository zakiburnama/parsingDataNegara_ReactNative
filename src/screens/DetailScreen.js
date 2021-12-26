import React from "react";
import {Text, View, ToastAndroid, StyleSheet,} from 'react-native';
import MapView from 'react-native-maps';


export default function DetailScreen({route}) {

    const{ nama, ibukota, kode, lat, lang } = route.params;
    
    return (
        <View style={styles.body}>

            <View style={styles.body2}>
                <Text style={styles.text}> { nama } ({ kode })</Text>
                <Text style={styles.text2}>Ibukota: { ibukota } </Text>
                <Text style={styles.text2}> Lat: { lat };  Lang: { lang } </Text>
            </View>
            
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
        backgroundColor: '#A3E3FA',
    },
    body2: {
        width: '95%',
        backgroundColor: '#8FDAFA',
        borderRadius: 20,
        marginTop: 15,
        marginBottom: 15,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
    },
    text2: {
        fontSize: 16,
        marginBottom: 10,
        marginLeft: 20,
    },
    map: {
        width: '100%',
        height: '100%',
    }
})