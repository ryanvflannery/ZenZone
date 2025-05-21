import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView, StyleSheet, ActivityIndicator, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import { EXPO_PUBLIC_API_URL } from "@env";
import "global.css";
import { useNavigation } from '@react-navigation/native';


interface ApiResponse {
  message: string;
}

const Home = () => {
  const [message, setMessage] = useState(""); // Store API response
  const [loading, setLoading] = useState(true); // Track loading state
  const navigation = useNavigation<any>();

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching from:", EXPO_PUBLIC_API_URL); // Debugging log
      try {
        const response = await axios.get<ApiResponse>(`${EXPO_PUBLIC_API_URL}`);
        setMessage(response.data.message); // Store API response
      } catch (error) {
        console.error("API Fetch Error:", error);
        setMessage("Failed to connect to server.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Ensure it runs only once


  return (
    <>
      {/* Transparent StatusBar */}
      <StatusBar style="light" translucent />

      {/* Gradient Background */}
      <LinearGradient
        colors={["#000010", "#2a065d", "#6C3BAA", "#CF9FFF"]}
        style={StyleSheet.absoluteFill} // Apply full-screen gradient
      />

      {/* Main Content */}
            <SafeAreaView className="flex-1 items-center justify-start">
        <Text className="text-4xl font-bold text-white absolute top-14 left-6 pt-3">ZenZone</Text>
        <Text className="absolute top-16 right-10 text-2xl opacity-120">🕯️</Text>

        {/* Centered Content */}
        <View className="flex-1 items-center justify-start pt-72">
          <Text className="text-3xl font-bold text-white mb-2">Eliminate Distractions</Text>
          <Text className="text-lg text-white opacity-80 text-center px-8">
            Find your focus! {"\n"} Unlock your full potential.
          </Text>

          {/* Show loading indicator while fetching API */}
          {/* 
          {loading ? (
          <ActivityIndicator size="large" color="#CF9FFF" className="mt-6" />
          ) : (
          <Text className="text-lg text-white opacity-90 text-center mt-4"></Text>
          )}
          */}

          <Text className="text-xl text-white/80 left-3 mt-10">Welcome back, Ryan 👋</Text>
          <Text className="mt-2 text-white/90 text-md">🔥 Streak: 6 days focused</Text>
          <Pressable
          className="mt-6 px-6 py-3 bg-purple-600 rounded-lg"
          onPress={() => navigation.navigate('ZenMode')}
          >
          <Text className="text-white font-semibold text-lg">Start Focus Session</Text>
          </Pressable>
  


        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
