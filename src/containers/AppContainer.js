import { createAppContainer,  createStackNavigator } from 'react-navigation';
// you can also import from @react-navigation/native
import AuthScreen from '../screens/AuthScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const AppNavigator = createStackNavigator({ 
    welcome: { screen: WelcomeScreen},
    auth: { screen: AuthScreen }
  });

const AppContainer = createAppContainer(AppNavigator);

// Now AppContainer is the main component for React to render

export default AppContainer;