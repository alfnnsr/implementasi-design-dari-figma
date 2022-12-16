import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function Home({navigation}) {
  const [cari, setCari]=useState(false);
  const onSearch = (text) => {
    if (text)
      setCari(true)
    else
      setCari(false)
  };
  return (
    <View style={styles.container}>
      <View style={{height:60, flexDirection:'row', alignItems:'center'}}>
        <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
          <Image source={require("../../assets/img/logo1.png")} style={{width:28, height:32}}/>
        </View>
        <View style={{ height:36, width:200, flex:4, borderRadius:50, borderWidth:1, flexDirection:'row', alignItems:'center'}}>
          <Image source={require("../../assets/img/icon/search.png")} style={{width:13, height:13, marginLeft:20, marginRight:10}}/>
          <TextInput placeholder='Cari Wisata' style={{height:40, width:200, alignItems:'center'}} onChangeText={onSearch} value={cari}/>
        </View>
        <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
          <Image source={require("../../assets/img/icon/love.png")} style={{width:20, height:17}}/>
        </View>
      </View>
      <ScrollView>
        <ImageBackground source={require("../../assets/img/wisata/bukulimau.png")} style={{width: '100%', height: 360}}>
          <View style={{flex:1}}>
            <LinearGradient colors={['rgba(0,0,0,0)', '#262626']} start={{x: 0.5, y: 0.5}} style={{flex:1, justifyContent:'flex-end', padding:17}}>
              <Text style={{color:'white', fontSize:14}}>Wisata Air</Text>
              <Text style={{color:'white', fontSize:24, width:250}}>Pulau Bukulimau Underwater</Text>
            </LinearGradient>                
          </View>
        </ImageBackground>

        <View style={{flex:1}}>
          <View style={{height:100, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Text style={{fontSize:20}}>Destinasi Wisata</Text>
            <Text style={{ontSize:12}}>Pilihan terbaik</Text>
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

          <View style={{alignItems: 'center', justifyContent:'center', paddingLeft:17, paddingRight:17}}>
            <View style={{width:'100%', height:100, borderBottomWidth:1, alignItems: 'center', justifyContent:'center'}}>
              <Text style={{fontSize:14}}>Lihat Lainnya</Text>
            </View>
          </View>
        </View>

        <View style={{flexDirection:'column'}}>
          <View style={{flex: 1, height:100, flexDirection:'column', alignItems: 'center'}}>
            <Text style={{paddingTop:30, fontSize:20}}>Jelajahi Sekarang</Text>
            <Text style={{paddingBottom: 20, fontSize:12}}>Pilih Kategori yang Diminati</Text>
          </View>
          <View style={{flex: 1, height: 100, flexDirection:'row', justifyContent:'space-evenly'}}>
            <View style={{alignItems:'center'}}>
              <Image source={require("../../assets/img/icon/wisata_alam.png")} style={{width: 35, height: 24}} />
              <Text style={{fontSize:10, textAlign:'center'}}>Wisata{"\n"}Alam</Text>
            </View>
            <View style={{alignItems:'center'}}>
              <Image source={require("../../assets/img/icon/wisata_air.png")} style={{width: 35, height: 24}} />
              <Text style={{fontSize:10, textAlign:'center'}}>Wisata{"\n"}Air</Text>
            </View>
            <View style={{alignItems:'center'}}>
              <Image source={require("../../assets/img/icon/wisata_kuliner.png")} style={{width: 35, height: 24}} />
              <Text style={{fontSize:10,textAlign:'center'}}>Wisata{"\n"}Kuliner</Text>
            </View>
            <View style={{alignItems:'center'}}>
              <Image source={require("../../assets/img/icon/wisata_sejarah.png")} style={{width: 35, height: 30}} />
              <Text style={{fontSize:10, textAlign:'center'}}>Wisata{"\n"}Sejarah</Text>
            </View>
          </View>
          <View style={{flex: 1, height: 100, flexDirection:'row', justifyContent:'space-evenly'}}>
            <View style={{alignItems:'center'}}>
              <Image source={require("../../assets/img/icon/hotel.png")} style={{width: 35, height: 28}} />
              <Text style={{fontSize:10, textAlign:'center'}}>Hotel{"\n"}Penginapan</Text>
            </View>
            <View style={{alignItems:'center'}}>
              <Image source={require("../../assets/img/icon/layanan.png")} style={{width: 18, height: 35}} />
              <Text style={{fontSize:10, textAlign:'center'}}>Layanan{"\n"}Publik</Text>
            </View>
            <View style={{alignItems:'center'}}>
              <Image source={require("../../assets/img/icon/transportasi.png")} style={{width: 35, height: 29}} />
              <Text style={{fontSize:10, textAlign:'center'}}>Travel{"\n"}Transportasi</Text>
            </View>
            <View style={{alignItems:'center'}}>
              <Image source={require("../../assets/img/icon/belanja.png")} style={{width: 35, height: 28}} />
              <Text style={{fontSize:10, textAlign:'center'}}>Belanja{"\n"}Oleh-oleh</Text>
            </View>
          </View>
        </View>

        <View style={{height: 185, alignItems:'center', marginBottom:50, justifyContent:'center'}}>
          <ImageBackground source={{uri: 'https://reactjs.org/logo-og.png'}} style={{width: 326, height: 185}} imageStyle={{ borderRadius: 10}}>
            <View style={{flex:1, justifyContent:'space-between', padding:17}}>
              <Text style={{color:'white', fontSize:24}}>Jaga kesehatan dan keselamatan dari virus Covid-19</Text>
              <Text style={{color:'white', fontSize:14}}>Selengkapnya  <Image source={require("../../assets/img/icon/arrow.png")} style={{width: 5, height: 9}} /> </Text>
            </View>
          </ImageBackground>
        </View>

        <View style={{flexDirection:'column'}}>
          <View style={{flex: 1, height:80, flexDirection:'column', alignItems: 'center'}}>
            <Text style={{fontSize:20}}>Informasi dan Berita</Text>
            <Text style={{fontSize:12}}>Seputar Belitung Timur</Text>
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
          </View>
              
          <View style={{flex: 1, backgroundColor:'white', height:100, flexDirection:'column', alignItems: 'center', justifyContent:'center'}}>
            <Text>Lihat Lainnya</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.shadow}>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{alignItems:'center'}}>
            <Image source={require("../../assets/img/icon/home.png")} style={{width: 16, height: 19}} />
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

export default Home;