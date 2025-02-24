import { registerRootComponent } from 'expo';
import App from './App';
import Home from './screens/Home'
import FocusMode from './screens/FocusMode'
import Goals from './screens/Goals'
import Profile from './screens/Profile'

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
