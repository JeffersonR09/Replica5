import { SafeAreaView, StatusBar, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react'
import { AntDesign, Octicons,Ionicons } from '@expo/vector-icons';
import Perfil from '../Components/Perfil';
import BodyView from '../Components/BodyView';



export default function Interfas5() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#F5FBFF' barStyle={'dark-content'}/>
      
      <View style={styles.header}>
      <AntDesign name="arrowleft" size={26} color="black" />
      <Text style={styles.textHeader}>My Profile</Text>
      <Octicons name="three-bars" size={24} color="black" />
      </View>
      <Perfil/>
      <BodyView/>
      <View style={styles.Footer}>
        <TouchableOpacity style={styles.iconsFooter}>
        <AntDesign name="calendar" size={24} color="black" />
        <Text>Agenda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconsFooter}>
        <Octicons name="briefcase" size={24} color="black" />
        <Text>Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconsFooter2}>
        <AntDesign name="appstore-o" size={35} color="#33D0C4" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconsFooter}>
        <Ionicons name="notifications-outline" size={24} color="black" />
        <Text>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconsFooter}>
        <Ionicons name="md-search-outline" size={24} color="black" />
        <Text>Search</Text>
        </TouchableOpacity>
        
        
      </View>
      
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#F5FBFF',

  },
  header:{
    flexDirection:'row',
    justifyContent: 'space-around',
    margin: '5%',
  
  },
  textHeader:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  Footer:{
    flex: 1,
    height:'30%',

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
    marginHorizontal:5,

  },
  iconsFooter:{
    alignItems: 'center',
  },
  iconsFooter2:{
    width: '15%',
    height: '70%',
    justifyContent:'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#D6DDEC',
    borderRadius:10,
  },
  
})