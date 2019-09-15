import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './pages/Login';
import Chat from './pages/Chat';
import Home from './pages/Home';
import DetailsCar from './pages/Home/DetailsCar';

const DetailsStack = createStackNavigator({
  DetailsCar,
});

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Chat,
      Login,
      DetailsStack,
    },
    {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      },
    }
  )
);

export default Routes;
