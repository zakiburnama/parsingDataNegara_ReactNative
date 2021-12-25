import React, {Component} from 'react';

import { FlatList, Text, TouchableHighlight, View, ToastAndroid, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../navigation/navigation';
// import Navigation from './src/navigation/navigation';

class App extends Component{
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
    .then((json) => {
      this.setState({data: json});
    })
    .catch((error) => {
      console.error(error);
    });
  }

//   pressBtn({navigation}) {
//     ToastAndroid.showWithGravityAndOffset(`BENAR`, ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25, 50);
//     navigation.navigate('Detail');
//   }

  renderItem=({item}) => (
    <TouchableHighlight
      onPress={() => this.props.navigation.push('Peta', {
        nama: item.name,
        ibukota: item.capital,
        kode: item.country_code,
        lat: item.latlng[0],
        lang: item.latlng[1],
      })}
      style={{borderBottomWidth:1, borderBottomColor:'#75AAF0'}}
    >

      <View style={{margin:10}}>
        <Text style={{fontSize:15, fontFamily: 'sans-serif-condensed', textAlign:'center'}}>Negara : {item.name}</Text>
        <Text style={{fontSize:15, fontFamily: 'sans-serif-condensed', textAlign:'center'}}>Kode Negara : {item.country_code}</Text>
        <Text style={{fontSize:15, fontFamily: 'sans-serif-condensed', textAlign:'center'}}>Ibu Kota : {item.capital}</Text>
      </View>

    </TouchableHighlight>
  );

  render(){
    return (
      <View style={{flex:1, justifyContent:'center', backgroundColor: '#8FDAFA'}}>
        <Text style={{backgroundColor: '#A3E3FA', textAlign:'center', fontSize:25, padding:10, fontFamily:'sans-serif-medium'}}>Countries List</Text>
        <FlatList
          data={this.state.data}
          renderItem = {this.renderItem}
          keyExtractor={(item) => item.name}
        />
        <Text style={{backgroundColor: '#A3E3FA', textAlign:'center', fontSize:15, padding:10, fontFamily:'sans-serif-medium'}}>Kelompok Delta</Text>
      </View>
    );
  }
}

export default App;