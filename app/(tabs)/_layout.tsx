import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#5beb97', // Lighter blue color
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Products',
          headerStyle: { backgroundColor: '#5beb97' },
          headerTitleStyle: { color: 'white' },
          tabBarIcon: ({ color }) => <Ionicons name="cart" color={color} size={28} />,
        }}
      />
    </Tabs>
  );
}
