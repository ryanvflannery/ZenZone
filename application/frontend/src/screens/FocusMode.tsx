import React, { useState, useEffect, useRef } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  Modal,
  Vibration,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import 'global.css';
import Svg, { Circle } from 'react-native-svg';

const QUOTES = [
  'Focus is the new productivity.',
  'One step at a time.',
  'Your future self will thank you.',
  'Stay patient and trust the process.',
  'Do something today that your future self will thank you for.',
];

export default function FocusMode() {
  const INITIAL_SECONDS = 25 * 60; // fixed 25-minute session
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);
  const [isRunning, setIsRunning] = useState(false);
  const [quote, setQuote] = useState<string>('Get focused!');
  const [modalVisible, setModalVisible] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Circle dimensions
  const strokeWidth = 8;
  const diameter = 200;
  const radius = (diameter - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Countdown logic
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft(prev => {
          if (prev <= 1) {
            clearInterval(intervalRef.current!);
            setIsRunning(false);
            onSessionComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current!);
    }
    return () => clearInterval(intervalRef.current!);
  }, [isRunning]);

  // Reset timer when component mounts
  useEffect(() => {
    setSecondsLeft(INITIAL_SECONDS);
  }, []);

  const onSessionComplete = () => {
    const idx = Math.floor(Math.random() * QUOTES.length);
    setQuote(QUOTES[idx]);
    Vibration.vibrate(500);
    setModalVisible(true);
  };

  const formattedTime = () => {
    const m = Math.floor(secondsLeft / 60).toString().padStart(2, '0');
    const s = (secondsLeft % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const progress = circumference * (1 - secondsLeft / INITIAL_SECONDS);

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

        {/* Circular Timer */}
        <View
          className="relative mt-40"
          style={{ width: diameter, height: diameter }}
        >
          <Svg width={diameter} height={diameter} className="absolute inset-0">
            <Circle
              cx={diameter / 2}
              cy={diameter / 2}
              r={radius}
              stroke="rgba(255,255,255,0.2)"
              strokeWidth={strokeWidth}
              fill="none"
            />
            <Circle
              cx={diameter / 2}
              cy={diameter / 2}
              r={radius}
              stroke="#CF9FFF"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={progress}
              fill="none"
            />
          </Svg>
          <Text
            className="absolute inset-0 text-6xl font-extrabold text-white text-center"
            style={{ lineHeight: diameter }}
          >
            {formattedTime()}
          </Text>
        </View>

        {/* Controls */}
        <View className="flex-row justify-around w-4/5 mt-10">
          <Pressable
            className={`px-6 py-3 rounded-lg bg-white/20 ${isRunning ? 'opacity-50' : ''}`}
            onPress={() => setIsRunning(true)}
            disabled={isRunning}
          >
            <Text className="text-white text-lg font-semibold">Start</Text>
          </Pressable>
          <Pressable
            className={`px-6 py-3 rounded-lg bg-white/20 ${!isRunning ? 'opacity-50' : ''}`}
            onPress={() => setIsRunning(false)}
            disabled={!isRunning}
          >
            <Text className="text-white text-lg font-semibold">Pause</Text>
          </Pressable>
          <Pressable
            className="px-6 py-3 rounded-lg bg-white/20"
            onPress={() => {
              setIsRunning(false);
              setSecondsLeft(INITIAL_SECONDS);
            }}
          >
            <Text className="text-white text-lg font-semibold">Reset</Text>
          </Pressable>
          
        </View>

        {/* Quote */}
        <Text className="mt-8 px-8 text-center text-white italic">“{quote}”</Text>
        {/* Yoga Emoji */}
        <Text className="mt-4 text-6xl text-white">🧘‍♀️</Text>

        {/* Completion Modal */}
        <Modal transparent visible={modalVisible} animationType="fade">
          <View className="flex-1 bg-black/50 items-center justify-center">
            <View className="bg-white p-8 rounded-lg items-center">
              <Text className="text-2xl font-bold mb-4">✨ You did it! ✨</Text>
              <Text className="text-center mb-6">“{quote}”</Text>
              <Pressable
                className="px-6 py-2 bg-purple-600 rounded"
                onPress={() => setModalVisible(false)}
              >
                <Text className="text-white font-semibold">OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </>
  );
}