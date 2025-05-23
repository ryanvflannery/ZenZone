import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from 'src/components/BottomTabs';


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" translucent />
      <BottomTabs />
    </NavigationContainer>
  );
}
