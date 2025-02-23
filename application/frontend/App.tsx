import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import "./global.css";

export default function App() {
  return (

    <View className="flex-1 items-center justify-center bg-gray-700">
      <Text className="text-2xl font-bold text-pink-300">ZenZone</Text>
      <StatusBar style="auto" />
      <TouchableOpacity>
        <Text>Hellooooi</Text>
      </TouchableOpacity>
    </View>
    
  );
}
