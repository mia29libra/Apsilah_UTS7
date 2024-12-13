
  import { Tabs } from 'expo-router'
  import React from 'react'
  import Entypo from '@expo/vector-icons/Entypo';
  import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


  export default function _layout() {
    return (
      <Tabs>
          <Tabs.Screen name='homeabsensi' 
          options={{
            title:"Home",
            tabBarIcon:({color}) => (
              <Entypo name="home" size={24} color="black" />
            ),
          }}
          />
          <Tabs.Screen name='profil'
          options={{
            title:"Account",
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="account" size={24} color="black" />
            )
          }}
          />
      </Tabs>
    )
  }