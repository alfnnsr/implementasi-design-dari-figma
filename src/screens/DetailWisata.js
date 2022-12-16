import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TextInput } from 'react-native';

const Detail = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground source={{uri: 'https://reactjs.org/logo-og.png'}} style={{width: '100%', height: 360}}>
          <View style={{flex:1, flexDirection:'row', padding:10}}>
            <View style={{flex:1, justifyContent:'flex-start'}}>
              <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{width: 36, height: 36}} />
            </View>
            <View style={{flex:1, justifyContent:'flex-end', flexDirection:'row'}}>
              <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{width: 36, height: 36, marginRight:16}} />
              <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{width: 36, height: 36}} />
            </View>
          </View>
        </ImageBackground>

        <View style={{padding:16}}>
          <Text style={{fontSize:24, color:'black'}}>Geosite Gunong Lumut</Text>
          <Text style={{fontSize:14, color:'grey'}}>Wisata Alam</Text>
          <Text style={{fontSize:14, color:'black', marginTop:16, textAlign:'justify'}}>Description It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</Text>
          <View style={{borderBottomWidth:0.2, marginTop:16}}></View>
          <Text style={{fontSize:12, color:'grey', marginTop:16}}>Telepon</Text>
          <Text style={{fontSize:24, color:'black'}}>0812-3456-7890</Text>
          <Text style={{fontSize:12, color:'grey', marginTop:16}}>Instagram</Text>
          <Text style={{fontSize:24, color:'black'}}>gunonglumut</Text>
          <View style={{borderBottomWidth:0.5, marginTop:16}}></View>
          <View style={{marginTop:16}}>
            <Text style={{fontSize:12, color:'grey', marginBottom:5}}>Galeri</Text>
            <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
              <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{width: 60, height: 60, borderRadius:8}} />
              <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{width: 60, height: 60, borderRadius:8}} />
              <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{width: 60, height: 60, borderRadius:8}} />
              <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{width: 60, height: 60, borderRadius:8}} />
              <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{width: 60, height: 60, borderRadius:8}} />
            </View>
          </View>
          <View style={{borderBottomWidth:0.2, marginTop:16}}></View>
          <Text style={{fontSize:12, color:'grey', marginTop:16}}>Lokasi</Text>
          <Text style={{fontSize:12, color:'black'}}>Kec. Kelapa Kampit, Kab. Belitung Timur, Mayang, Klp. Kampit</Text>
        </View>

        <ImageBackground source={{uri: 'https://reactjs.org/logo-og.png'}} style={{width: '100%', height: 202}}>
          <View style={{flex:1, padding:10, justifyContent:'flex-end', alignItems:'center'}}>
            <Text style={{color:'white'}}>Map</Text>
          </View>
        </ImageBackground>
      </ScrollView>

    </View>
  );
};
  
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
});

export default Detail;