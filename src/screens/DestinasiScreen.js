import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function Destinasi({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{flex:1, flexDirection:'row', paddingLeft:20, paddingRight:20, borderBottomWidth:0.5, height:56, justifyContent:'center', alignItems:'center'}}>
          <View style={{flex:1, justifyContent:'flex-start'}}>
            <Text style={{fontSize:18, color:'black'}}>Destinasi</Text>
          </View>
          <View style={{flex:1, justifyContent:'flex-end', flexDirection:'row'}}>
            <Image source={require("../../assets/img/icon/search.png")} style={{width: 18, height: 18, marginRight:22}} />
            <Image source={require("../../assets/img/icon/map.png")} style={{width: 18, height: 18}} />
          </View>
        </View>
        <View style={{height:50, justifyContent:'center', alignItems:'center', flexDirection:'row', justifyContent:'space-evenly'}}>
          <View style={{borderRadius:8, borderWidth:0.5, backgroundColor:'#EBF5FF',height:26, width:68, borderColor:'#EBF5FF', justifyContent:'center', alignItems:'center'}}><Text style={{fontSize:12, color:'#0085CC',}}>Semua</Text></View>
          <Text style={{fontSize:12, color:'black'}}>Wisata Alam</Text>
          <Text style={{fontSize:12, color:'black'}}>Wisata Air</Text>
          <Text style={{fontSize:12, color:'black'}}>Wisata Kuliner</Text>
        </View>
        <View style={{flex:1, height:200, flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
          <ImageBackground source={require("../../assets/img/wisata/pantai_serdang.png")} style={{width: 155, height: 175}} imageStyle={{ borderRadius: 10}}>
            <View style={{flex:1}}>
              <LinearGradient colors={['rgba(0,0,0,0)', '#262626']} start={{x: 0.5, y: 0.5}} style={{flex:1, justifyContent:'flex-end', padding:17, borderRadius:10}}>
                <Text style={{color:'white', fontSize:14}}>Pantai Serdang</Text>
              </LinearGradient>                
            </View>
          </ImageBackground>
          <ImageBackground source={require("../../assets/img/wisata/vihara_patung.png")} style={{width: 155, height: 175}} imageStyle={{ borderRadius: 10}}>
            <View style={{flex:1}}>
              <LinearGradient colors={['rgba(0,0,0,0)', '#262626']} start={{x: 0.5, y: 0.5}} style={{flex:1, justifyContent:'flex-end', padding:17, borderRadius:10}}>
                <Text style={{color:'white', fontSize:14}}>Vihara Patung Dewi Kwan Im</Text>
              </LinearGradient>                
            </View>
          </ImageBackground>
        </View>

        <View style={{flex:1, height:200, flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
          <ImageBackground source={require("../../assets/img/wisata/replika_sd.png")} style={{width: 155, height: 175}} imageStyle={{ borderRadius: 10}}>
            <View style={{flex:1}}>
              <LinearGradient colors={['rgba(0,0,0,0)', '#262626']} start={{x: 0.5, y: 0.5}} style={{flex:1, justifyContent:'flex-end', padding:17, borderRadius:10}}>
                <Text style={{color:'white', fontSize:14}}>Replika SD Laskar Pelangi</Text>
              </LinearGradient>                
            </View>
          </ImageBackground>
          <ImageBackground source={require("../../assets/img/wisata/pantai_nyiur.png")} style={{width: 155, height: 175}} imageStyle={{ borderRadius: 10}}>
            <View style={{flex:1}}>
              <LinearGradient colors={['rgba(0,0,0,0)', '#262626']} start={{x: 0.5, y: 0.5}} style={{flex:1, justifyContent:'flex-end', padding:17, borderRadius:10}}>
                <Text style={{color:'white', fontSize:14}}>Pantai Nyiur Melambai</Text>
              </LinearGradient>                
            </View>
          </ImageBackground>
        </View>

        <View style={{flex:1, height:200, flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
          <ImageBackground source={require("../../assets/img/wisata/pantai_serdang.png")} style={{width: 155, height: 175}} imageStyle={{ borderRadius: 10}}>
            <View style={{flex:1}}>
              <LinearGradient colors={['rgba(0,0,0,0)', '#262626']} start={{x: 0.5, y: 0.5}} style={{flex:1, justifyContent:'flex-end', padding:17, borderRadius:10}}>
                <Text style={{color:'white', fontSize:14}}>Pantai Serdang</Text>
              </LinearGradient>                
            </View>
          </ImageBackground>
          <ImageBackground source={require("../../assets/img/wisata/vihara_patung.png")} style={{width: 155, height: 175}} imageStyle={{ borderRadius: 10}}>
            <View style={{flex:1}}>
              <LinearGradient colors={['rgba(0,0,0,0)', '#262626']} start={{x: 0.5, y: 0.5}} style={{flex:1, justifyContent:'flex-end', padding:17, borderRadius:10}}>
                <Text style={{color:'white', fontSize:14}}>Vihara Patung Dewi Kwan Im</Text>
              </LinearGradient>                
            </View>
          </ImageBackground>
        </View>

        <View style={{flex:1, height:200, flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
          <ImageBackground source={require("../../assets/img/wisata/replika_sd.png")} style={{width: 155, height: 175}} imageStyle={{ borderRadius: 10}}>
            <View style={{flex:1}}>
              <LinearGradient colors={['rgba(0,0,0,0)', '#262626']} start={{x: 0.5, y: 0.5}} style={{flex:1, justifyContent:'flex-end', padding:17, borderRadius:10}}>
                <Text style={{color:'white', fontSize:14}}>Replika SD Laskar Pelangi</Text>
              </LinearGradient>                
            </View>
          </ImageBackground>
          <ImageBackground source={require("../../assets/img/wisata/pantai_nyiur.png")} style={{width: 155, height: 175}} imageStyle={{ borderRadius: 10}}>
            <View style={{flex:1}}>
              <LinearGradient colors={['rgba(0,0,0,0)', '#262626']} start={{x: 0.5, y: 0.5}} style={{flex:1, justifyContent:'flex-end', padding:17, borderRadius:10}}>
                <Text style={{color:'white', fontSize:14}}>Pantai Nyiur Melambai</Text>
              </LinearGradient>                
            </View>
          </ImageBackground>
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
            <Image source={require("../../assets/img/icon/destinasi1.png")} style={{width: 21, height: 16}} />
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
            <Image source={require("../../assets/img/icon/lainnya.png")} style={{width: 16, height: 16}} />
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

export default Destinasi;