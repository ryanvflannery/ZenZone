import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import 'global.css'

const Home = () => {
  return (
    <>
      {/* Transparent StatusBar */}
      <StatusBar style="light" translucent />

      {/* Gradient Background Purple */}
      {/*}
      <LinearGradient
        colors={['#2a064d', '#6C3BAA', '#CF9FFF']}
        style={StyleSheet.absoluteFill} // Apply full-screen gradient
      />*/}
      {/* Green Theme */}
      <LinearGradient
        colors={['#000010', '#00594f', '#00876f', '#00a765', ]} 
        style={StyleSheet.absoluteFill}
        />



      {/* Main Content */}
      <SafeAreaView style={{ flex: 1 }}>
        <Text className="text-4xl font-bold text-white absolute top-14 left-6 pt-3">ZenZone</Text>

        {/* Centered Content */}
        <View className="flex-1 items-center justify-start pt-72">
          {/* Main Text */}
          <Text className="text-3xl font-bold text-white mb-2">Start Zen Session</Text>

        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
