import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={styles.homeContainer}>
      <Link href={"/login/index"} style={styles.homeText}><Text>Go to Home Screen</Text></Link>
    </View>
  )
}

export default index
const styles=StyleSheet.create({
    homeContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    homeText:{
        fontSize:20,
        fontWeight:'700',
        cursor:'pointer'
    }
})