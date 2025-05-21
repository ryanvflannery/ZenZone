import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  LayoutAnimation,
  Platform,
  UIManager,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import 'global.css';

interface Goal {
  id: number;
  text: string;
}

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Goals() {
  const [weeklyGoals, setWeeklyGoals] = useState<Goal[]>([]);
  const [dreamGoals, setDreamGoals] = useState<Goal[]>([]);
  const [newWeekly, setNewWeekly] = useState('');
  const [newDream, setNewDream] = useState('');
  const [dayOfYear, setDayOfYear] = useState(1);

  useEffect(() => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    setDayOfYear(Math.floor(diff / oneDay));
  }, []);

  const addWeekly = () => {
    if (newWeekly.trim()) {
      setWeeklyGoals(g => [...g, { id: Date.now(), text: newWeekly.trim() }]);
      setNewWeekly('');
    }
  };
  const addDream = () => {
    if (newDream.trim()) {
      setDreamGoals(g => [...g, { id: Date.now(), text: newDream.trim() }]);
      setNewDream('');
    }
  };

  const removeWeekly = (id: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setWeeklyGoals(ws => ws.filter(g => g.id !== id));
  };
  const removeDream = (id: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setDreamGoals(ds => ds.filter(g => g.id !== id));
  };

  return (
    <>
      <StatusBar style="light" translucent />
      <LinearGradient
        colors={["#000010", "#2a065d", "#6C3BAA", "#CF9FFF"]}
        style={StyleSheet.absoluteFill}
      />
      <SafeAreaView className="flex-1 justify-start">
        <Text className="text-4xl font-bold text-white absolute top-14 left-6 pt-3">ZenZone</Text>
        <Text className="absolute top-16 right-10 text-2xl opacity-120">🕯️</Text>
        <Text className="mt-12 left-6 text-lg font-semibold text-green-300">Day {dayOfYear}/365</Text>

        <ScrollView
          contentContainerStyle={{
            paddingTop: 40,
            paddingHorizontal: 20,
            paddingBottom: 80,
            alignItems: 'center'
          }}
        >
          {/* Weekly Goals Card */}
          <View className="bg-white/20 rounded-2xl p-4 mb-8 w-full max-w-md"
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.2,
            shadowRadius: 6,
            elevation: 5, // Android shadow
            borderColor: '#CF9FFF',
            borderWidth: 1,
          }}
        >
            <Text className="text-xl font-semibold text-white mb-3">
              Weekly Goals
            </Text>
            {weeklyGoals.length > 0 ? (
              weeklyGoals.map(g => (
                <View
                  key={g.id}
                  className="flex-row items-center justify-between mb-2"
                >
                  <Text className="text-white text-base flex-shrink">
                    • {g.text}
                  </Text>
                  <Pressable onPress={() => removeWeekly(g.id)}>
                    <Text className="text-white text-sm">❌</Text>
                  </Pressable>
                </View>
              ))
            ) : (
              <Text className="text-white/70 italic">
                No short-term goals yet
              </Text>
            )}
          </View>

          {/* Long-Term Goals Card */}
          <View className="bg-white/20 rounded-2xl p-4 mb-5 w-full max-w-md"
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.2,
            shadowRadius: 6,
            elevation: 5,
            borderWidth: 1,
            borderColor: '#CF9FFF',

          }}
          >
            <Text className="text-xl font-semibold text-white mb-3">
              Long-Term Goals
            </Text>
            {dreamGoals.length > 0 ? (
              dreamGoals.map(g => (
                <View
                  key={g.id}
                  className="flex-row items-center justify-between mb-2"
                >
                  <Text className="text-white text-base flex-shrink">
                    • {g.text}
                  </Text>
                  <Pressable onPress={() => removeDream(g.id)}>
                    <Text className="text-white text-sm">❌</Text>
                  </Pressable>
                </View>
              ))
            ) : (
              <Text className="text-white/70 italic">
                No long-term goals yet
              </Text>
            )}
          </View>

          {/* Add Goals Section */}
          <View className="w-full max-w-md">
            <Text className="text-white font-semibold mb-2 text-lg text-center">
              Add This Week
            </Text>
            <View className="flex-row items-center mb-6"
            >
              <TextInput
                value={newWeekly}
                onChangeText={setNewWeekly}
                placeholder="e.g. 5 workouts"
                placeholderTextColor="rgba(255,255,255,0.6)"
                className="flex-1 bg-white/20 rounded-lg px-4 py-2 text-white"
              />
              <Pressable
                onPress={addWeekly}
                className="ml-3 bg-purple-600 px-4 py-2 rounded-lg"
              >
                <Text className="text-white font-semibold text-lg">+</Text>
              </Pressable>
            </View>

            <Text className="text-white font-semibold mb-2 text-lg text-center">
              Add Long-Term Goal
            </Text>
            <View className="flex-row items-center mb-6">
              <TextInput
                value={newDream}
                onChangeText={setNewDream}
                placeholder="e.g. Publish a book"
                placeholderTextColor="rgba(255,255,255,0.6)"
                className="flex-1 bg-white/20 rounded-lg px-4 py-2 text-white"
              />
              <Pressable
                onPress={addDream}
                className="ml-3 bg-purple-600 px-4 py-2 rounded-lg"
              >
                <Text className="text-white font-semibold text-lg">+</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
