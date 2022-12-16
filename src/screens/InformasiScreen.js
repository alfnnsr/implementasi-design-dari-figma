import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

function Informasi({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{flex:1, flexDirection:'row', paddingLeft:20, paddingRight:20, borderBottomWidth:0.5, height:56, justifyContent:'center', alignItems:'center'}}>
          <View style={{flex:1, justifyContent:'flex-start'}}>
            <Text style={{fontSize:18, color:'black'}}>Informasi dan Berita</Text>
          </View>
        </View>
        <View style={{paddingLeft:17, paddingRight:17}}>
          <View style={{alignItems:'center', justifyContent: 'center'}}>
            <View style={{flex: 1, height: 100, flexDirection:'row', borderBottomWidth:0.5}}>
              <View style={{flex: 3, justifyContent:'center'}}>
                <Image source={require("../../assets/img/kejurkab.png")} style={{width: 64, height: 64, borderRadius:10}} />
              </View>
              <View style={{flex: 7, justifyContent: 'center'}}>
                <Text style={{fontSize:16 }}>Adakan Kejurkab Tinju 2022</Text>
                <Text style={{fontSize:12}}>20 Oktober 2021</Text>
              </View>
            </View>
          </View>
          <View style={{alignItems:'center', justifyContent: 'center'}}>
            <View style={{flex: 1, height: 100, flexDirection:'row', borderBottomWidth:0.5}}>
              <View style={{flex: 3, justifyContent:'center'}}>
                <Image source={require("../../assets/img/wabup.png")} style={{width: 64, height: 64, borderRadius:10}} />
              </View>
              <View style={{flex: 7, justifyContent: 'center'}}>
                <Text style={{fontSize:16 }}>Wabup Beltim Apresiasi Job Fair Beltim</Text>
                <Text style={{fontSize:12}}>15 Oktober 2021</Text>
              </View>
            </View>
          </View>
          <View style={{alignItems:'center', justifyContent: 'center'}}>
            <View style={{flex: 1, height: 100, flexDirection:'row', borderBottomWidth:0.5}}>
              <View style={{flex: 3, justifyContent:'center'}}>
                <Image source={require("../../assets/img/lkpm.png")} style={{width: 64, height: 64, borderRadius:10}} />
              </View>
              <View style={{flex: 7, justifyContent: 'center'}}>
                <Text style={{fontSize:16 }}>LKPM Buat Proyek Pemerintah Jadi Lebih Terpantau</Text>
                <Text style={{fontSize:12}}>8 Oktober 2021</Text>
              </View>
            </View>
          </View>
          <View style={{alignItems:'center', justifyContent: 'center'}}>
            <View style={{flex: 1, height: 100, flexDirection:'row', borderBottomWidth:0.5}}>
              <View style={{flex: 3, justifyContent:'center'}}>
                <Image source={require("../../assets/img/kejurkab.png")} style={{width: 64, height: 64, borderRadius:10}} />
              </View>
              <View style={{flex: 7, justifyContent: 'center'}}>
                <Text style={{fontSize:16 }}>Adakan Kejurkab Tinju 2022</Text>
                <Text style={{fontSize:12}}>20 Oktober 2021</Text>
              </View>
            </View>
          </View>
          <View style={{alignItems:'center', justifyContent: 'center'}}>
            <View style={{flex: 1, height: 100, flexDirection:'row', borderBottomWidth:0.5}}>
              <View style={{flex: 3, justifyContent:'center'}}>
                <Image source={require("../../assets/img/wabup.png")} style={{width: 64, height: 64, borderRadius:10}} />
              </View>
              <View style={{flex: 7, justifyContent: 'center'}}>
                <Text style={{fontSize:16 }}>Wabup Beltim Apresiasi Job Fair Beltim</Text>
                <Text style={{fontSize:12}}>15 Oktober 2021</Text>
              </View>
            </View>
          </View>
          <View style={{alignItems:'center', justifyContent: 'center'}}>
            <View style={{flex: 1, height: 100, flexDirection:'row', borderBottomWidth:0.8}}>
              <View style={{flex: 3, justifyContent:'center'}}>
                <Image source={require("../../assets/img/lkpm.png")} style={{width: 64, height: 64, borderRadius:10}} />
              </View>
              <View style={{flex: 7, justifyContent: 'center'}}>
                <Text style={{fontSize:16 }}>LKPM Buat Proyek Pemerintah Jadi Lebih Terpantau</Text>
                <Text style={{fontSize:12}}>8 Oktober 2021</Text>
              </View>
            </View>
          </View>
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
            <Image source={require("../../assets/img/icon/informasi1.png")} style={{width: 16, height: 19}} />
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

export default Informasi;