import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home')
    }, 2000);
  })
  return (
    <View style={styles.container}>
      <View style={{flex:5, alignItems:'center', justifyContent:'center'}}>
        <Image source={require("../../assets/img/logo1.png")} style={{width: 102, height: 120, marginBottom: 10}}/>
        <Image source={require("../../assets/img/logo2.png")} style={{width: 126, height: 68}}/>
      </View>
      <View style={{flex:1, justifyContent:'flex-end', marginBottom:52, alignItems:'center'}}>
        <Text style={{marginBottom: 20}}>Didukung Oleh :</Text>
        <View style={{flexDirection:'row'}}>
          <Image source={require("../../assets/img/Logo-Beltim-kecil.png")} style={{width: 38, height: 48, marginRight: 38}}/>
          <Image source={require("../../assets/img/logo_Geopark.png")} style={{width: 48, height: 48}}/>
        </View>
      </View>
    </View>
    );
};
  
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EBF5FF',
    flex: 1,
  },
});

export default SplashScreen;