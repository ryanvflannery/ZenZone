// screens/Profile.tsx
import React from 'react';
import { SafeAreaView, View, Text, Pressable, StyleSheet, Platform, UIManager } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import 'global.css';

// Hardcoded user info
const user = {
  name: 'Ryan Flannery',
  email: 'ryanvflannery@gmail.com',
  sessionsCompleted: 12,
  totalFocusTime: '5h 45m',
};

export default function Profile() {
  return (
    <>
      <StatusBar style="light" translucent />
      <LinearGradient
        colors={["#000010", "#2a065d", "#6C3BAA", "#CF9FFF"]}
        style={StyleSheet.absoluteFill}
      />
      <SafeAreaView className="flex-1 items-center justify-start">
              <Text className="text-4xl font-bold text-white absolute top-14 left-6 pt-3">ZenZone</Text>
              <Text className="absolute top-16 right-10 text-2xl opacity-120">🕯️</Text>
      

        {/* Profile Card */}
        <View
          className="mt-24 w-full w-11/12 max-w-sm bg-white/20 rounded-2xl p-6"
          style={{
            borderColor: 'rgba(255,255,255,0.2)',
            borderWidth: 1,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 4, // Android shadow
          }}
        >
          <Text className="text-2xl font-semibold text-white mb-1">{user.name}</Text>
          <Text className="text-base text-white opacity-80 mb-4">{user.email}</Text>

          <View className="mb-4">
            <Text className="text-lg text-white">Sessions Completed:</Text>
            <Text className="text-2xl font-bold text-white">{user.sessionsCompleted}</Text>
          </View>

          <View className="mb-6">
            <Text className="text-lg text-white">Total Focus Time:</Text>
            <Text className="text-2xl font-bold text-white">{user.totalFocusTime}</Text>
          </View>

          {/* Optional Reset Button */}
          <Pressable className="bg-white/30 rounded-lg py-2">
            <Text className="text-center text-white font-semibold">Reset Progress</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
}
