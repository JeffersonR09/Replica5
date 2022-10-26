import { StyleSheet, Text, View, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import {AntDesign, Feather, MaterialCommunityIcons, EvilIcons,MaterialIcons } from '@expo/vector-icons';

export default function BodyView() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.viewList}>
        <View style={styles.menu}>
        <Feather style={styles.icons} name="phone" size={28} color="#33D0C4" />
        <Text style={styles.texts}>Phone Number</Text>
        <Text style={styles.texts1}>+971 52 657-0686</Text>
        </View>
        <View style={styles.menu}>
        <MaterialCommunityIcons style={styles.icons} name="email-outline" size={30} color="#33D0C4" />
        <Text style={styles.texts}>Email</Text>
        <Text style={styles.texts1}>che.nevy@gmail.com</Text>
        </View>
        <View style={styles.menu}>
        <EvilIcons  style={styles.icons1} name="location" size={38} color="#33D0C4" />
        <Text style={styles.texts}>Location</Text>
        <Text style={styles.texts1}>UAE. Dubai</Text>
        </View>
        <View>
        <MaterialIcons  style={styles.icons} name="access-time" size={32} color="#33D0C4" />
        <Text style={styles.texts}>Time Zone</Text>
        <Text style={styles.texts1}>Dubai (GMT+4)</Text>
        </View>
        <View style={styles.edit}>
          <TouchableOpacity style={styles.bottom}>
            <Text style={styles.textEdit}>Edit</Text>
            <AntDesign style={styles.iconEdit} name="edit" size={26} color="#fff" />
          </TouchableOpacity>
         </View>
      </ScrollView>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 6,
    backgroundColor: '#fff',
    height: '80%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#D6DDEC',

  },
  viewList:{
    margin: '10%',
    
  },
  menu:{
    borderBottomWidth: 2,
    borderColor: '#D6DDEC',
    
    

  },
  icons:{
    top: '50%',
  },
  texts:{
    left: '14%',
    fontSize: 14,
    color: '#4A4B59',
  },
  texts1:{
    left: '14%',
    fontSize: 20,
    color: '#4A4B59',
    marginBottom: '4%',
    
  },
  icons1:{
    top: '50%',
    right: '2%',
  },
  edit:{
    height: '13%',
    width: '45%',
    backgroundColor: '#33D0C4',
    alignItems: 'center',
    alignContent: 'center',
    margin: '10%',
    left: '15%',
    borderRadius: 12,
    justifyContent: 'center',
  },
  bottom:{
    flexDirection: 'row',
    
    
  },
  textEdit:{
    justifyContent: 'center',
    textAlign: 'center',
    margin:'5%',
    fontSize:20,
    color:'#fff',
    fontWeight: '900',
  },
  iconEdit:{
    justifyContent: 'center',
    textAlign: 'center',
    margin:'5%',
    marginLeft: '0%',
  },
  
})