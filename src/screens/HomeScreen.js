import React, {Component} from 'react';

import { FlatList, Text, TouchableHighlight, View, ToastAndroid, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../navigation/navigation';
// import Navigation from './src/navigation/navigation';

class HomeScreen extends Component{
  constructor(){
    super();
    this.state={
      data:[]
    }
  }

  componentDidMount(){
    this.getData();
  }

  getData = () => {
    fetch('https://gist.githubusercontent.com/erdem/8c7d26765831d0f9a8c62f02782ae00d/raw/248037cd701af0a4957cce340dabb0fd04e38f4c/countries.json')
    .then((response) => response.json())
    .then((json) => { this.setState({data: json}) })
    .catch((error) => { console.error(error) })
  }

  renderItem=({item}) => (
    <TouchableHighlight
      onPress={() => this.props.navigation.push('Peta', {
        nama: item.name,
        ibukota: item.capital,
        kode: item.country_code,
        lat: item.latlng[0],
        lang: item.latlng[1],
      })}
      style={styles.sentuh}
    >

      <View style={{margin:10}}>
        <Text style={styles.text2}>Negara : {item.name}</Text>
        <Text style={styles.text2}>Kode Negara : {item.country_code}</Text>
        <Text style={styles.text2}>Ibu Kota : {item.capital}</Text>
      </View>

    </TouchableHighlight>
  );

  render(){
    return (
      <View style={styles.body}>
        <FlatList
          data={this.state.data}
          renderItem = {this.renderItem}
          keyExtractor={(item) => item.name}
        />
        <Text style={{backgroundColor: '#A3E3FA', textAlign:'center', fontSize:15, fontWeight: 'bold', padding:10, fontFamily:'sans-serif-medium'}}>Kelompok Delta</Text>
      </View>
    );
  }
}

export default HomeScreen;


const styles = StyleSheet.create({
  body: {
      flex: 1,
      justifyContent:'center',
      backgroundColor: '#A3E3FA',
  },
  text: {
      fontSize: 40,
      margin: 10,
  },
  text2: {
      fontSize:15, 
      fontFamily: 'sans-serif-condensed', 
      textAlign:'center'
  },
  sentuh: {
    borderRadius:10,
    backgroundColor: '#8FDAFA',
    marginHorizontal:10,
    marginTop:10
  },
  daftar: {

  }
})