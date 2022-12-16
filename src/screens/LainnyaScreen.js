import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

function Lainnya({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{flex:1, flexDirection:'row', paddingLeft:17, paddingRight:17, borderBottomWidth:0.5, height:100, justifyContent:'space-between', alignItems:'center'}}>
          <Image source={require("../../assets/img/logo2.png")} style={{width:114, height:48}}/>
          <Image source={require("../../assets/img/logo1.png")} style={{width:48, height:56}}/>
        </View>
        <View style={{borderBottomWidth:0.5, height:56, justifyContent:'center'}}>
          <Text style={{fontSize:14, color:'black', paddingLeft:17, paddingRight:17}}>Tentang</Text>
        </View>
        <View style={{borderBottomWidth:0.5, height:56, justifyContent:'center'}}>
          <Text style={{fontSize:14, color:'black', paddingLeft:17, paddingRight:17}}>Favorit destinasi</Text>
        </View>
        <View style={{borderBottomWidth:0.5, height:56, justifyContent:'center'}}>
          <Text style={{fontSize:14, color:'black', paddingLeft:17, paddingRight:17}}>Kritik dan Saran</Text>
        </View>
        <View style={{borderBottomWidth:0.5, height:56, justifyContent:'center'}}>
          <Text style={{fontSize:14, color:'black', paddingLeft:17, paddingRight:17}}>Nilai Aplikasi</Text>
        </View>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontSize:12, color:'black', paddingLeft:17, paddingRight:17, marginTop:48}}>
            App Version 1.0
          </Text>
          <Text style={{color:'#9096A0', fontSize:12}}>{"\n"}Hak Cipta © 2022</Text>
          <Text style={{color:'black', fontSize:12}}>Dinas Kebudayaan dan Pariwisata Belitung Timur</Text>
          <Text style={{color:'#0085CC', fontSize:12}}>{"\n"}WWWW.disbudpar.baltim.go.id</Text>
        </View>
      </ScrollView>
      <View style={styles.shadow}>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{alignItems:'center'}}>
            <Image source={require("../../assets/img/icon/home1.png")} style={{width: 16, height: 19}} />
            <Text style={{fontSize:11, width:50, textAlign:'center'}}>Beranda</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1, justifyContent:'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Destinasi')} style={{alignItems:'center'}}>
            <Image source={require("../../assets/img/icon/destinasi.png")} style={{width: 21, height: 16}} />
            <Text style={{fontSize:11, width:50, textAlign:'center'}}>Destinasi</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Informasi')} style={{alignItems:'center'}}>
            <Image source={require("../../assets/img/icon/informasi.png")} style={{width: 16, height: 19}} />
            <Text style={{fontSize:11, width:50, textAlign:'center'}}>Informasi</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Lainnya')} style={{alignItems:'center'}}>
            <Image source={require("../../assets/img/icon/lainnya1.png")} style={{width: 16, height: 16}} />
            <Text style={{fontSize:11, width:50, textAlign:'center'}}>Lainnya</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
  
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  shadow: {
    backgroundColor:'white',
    height: 60,
    flexDirection:'row',
    justifyContent:'space-evenly',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 1
  }
});

export default Lainnya;