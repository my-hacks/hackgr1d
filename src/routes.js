import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './pages/Login';
import Chat from './pages/Chat';
import Home from './pages/Home';
import DetailsCar from './pages/Home/DetailsCar';
import Proposal from './pages/Proposal';
import Family from './pages/Family';

const DetailsStack = createStackNavigator({
  DetailsCar,
  Family,
});

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Chat,
      Login,
      DetailsStack,
      Proposal,
    },
    {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      },
    },
  ),
);

export default Routes;
