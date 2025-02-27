import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

// Screens
import Home from 'src/screens/Home';
import FocusMode from 'src/screens/FocusMode';
import Goals from 'src/screens/Goals';
import Profile from 'src/screens/Profile';


// Define the type for the bottom tabs
type TabParamList = {
  Home: undefined;
  ZenMode: undefined;
  Goals: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home-outline';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'ZenMode') {
            iconName = focused ? 'timer' : 'timer-outline';
          } else if (route.name === 'Goals') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // Wrap in View and apply NativeWind classes for centering
          return (
            <View className="items-center justify-center">
              <Ionicons
              name={iconName}
              size={focused ? size + 6 : size}
              color={focused ? '#B28DFF' : color}
              style={{ transform: [{ scale: focused ? 1 : 1 }] }} // Bounce effect
/>
            </View>
          );
        },
        tabBarActiveTintColor: '#B28DFF',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
            backgroundColor: 'black', 
            borderTopLeftRadius: 0, // No rounding
            borderTopRightRadius: 0,
            height: 72,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: -4 },
            shadowRadius: 6,
            elevation: 10,
            borderTopColor: 'rgba(255, 255, 255, 0.2)',
            borderTopWidth: 0.5,
          },
          
        tabBarLabelStyle: {
            fontSize: 12,
            textShadowColor: 'rgba(0, 0, 0, 0.2)',
            textShadowOffset: { width: 0, height: 1 },
            textShadowRadius: 1,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="ZenMode" component={FocusMode} />
      <Tab.Screen name="Goals" component={Goals} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
