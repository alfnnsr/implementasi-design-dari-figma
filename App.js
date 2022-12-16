// import React, {useEffect, useState} from 'react';
// import { StyleSheet, Text, View, Image } from 'react-native';


// const App = () => {

//   const [page, setPage] = React.useState('');
//   const [perpage, setPerpage] = React.useState('');
//   const [total, setTotal] = React.useState('');
//   const [totalpage, setTotalpage] = React.useState('');

//   React.useEffect(async() => {
//     const movies = await getMoviesFromApi();
//     console.log(movies);
//   }, []);

//   const getMoviesFromApi = () => {
//     return fetch('https://reqres.in/api/users?page=2')
//     .then ((response) => response.json())
//     .then((json) => {
//       setPage(json.page);
//       setPerpage(json.per_page);
//       setTotal(json.total);
//       setTotalpage(json.total_pages);
//       return json.page;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//   }

//   return (
//     <View>
//       <Text>Page {page}</Text>
//       <Text>Per-Page {perpage}</Text>
//       <Text>Total {total}</Text>
//       <Text>Total-Page {totalpage}</Text>
//     </View>
//   );
// };

// export default App;

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from "./src/screens/SplashScreen";
import HomeScreen from "./src/screens/HomeScreen";
import DestinasiScreen from "./src/screens/DestinasiScreen";
import InformasiScreen from "./src/screens/InformasiScreen";
import LainnyaScreen from "./src/screens/LainnyaScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Destinasi" component={DestinasiScreen} />
        <Stack.Screen name="Informasi" component={InformasiScreen} />
        <Stack.Screen name="Lainnya" component={LainnyaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
