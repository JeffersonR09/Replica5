import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Perfil() {
  return (
    <View style={styles.container}>
        <View style={styles.viewImage}>
        <Image 
        style = {styles.imagen}
        source={require('../../image/Shawn-Mendes.webp')}/>
        </View>
        <View>
        <TouchableOpacity style={styles.containerImage}>
        <MaterialCommunityIcons style={styles.iconoImage} name="file-image-plus" size={20} color="#fff" />
        </TouchableOpacity>
        </View>
        <View style={styles.viewText}>
        <Text style={styles.textPerfil1}>Denko Neva</Text>
        <Text style={styles.textPerfil2}>Log Out</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 3,
    },
    imagen:{
        height: 130,
        width:130,
        borderColor: '#33D0C4',
        borderWidth: 3,
        borderRadius: 15,
    },
    viewImage:{
        alignItems: 'center',

    },
    containerImage:{
        top: '-50%',
        height: '35%',
        width: '8%',
        backgroundColor: '#33D0C4',
        borderRadius: 6,
        alignItems: 'center',
        left: '54%',
    },
    iconoImage:{
        top: '4%',
        margin: '3%',
        justifyContent: 'flex-end',
       
    },
    viewText:{
        top: '-28%',
        justifyContent: 'center',
    },
    textPerfil1:{
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textPerfil2:{
        fontSize: 20,
        fontWeight: '500',
        color: '#33D0C4',
        textAlign: 'center',
    },

})