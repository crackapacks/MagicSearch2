import { createAppContainer,  createStackNavigator } from 'react-navigation';
// you can also import from @react-navigation/native
import LogIn from '../screens/LogIn';
import SignUp from '../screens/SignUp';

const AppNavigator = createStackNavigator({ 
     login: { screen: LogIn},
    signup: { screen: SignUp}
  });

const AppContainer = createAppContainer(AppNavigator);

// Now AppContainer is the main component for React to render

export default AppContainer;