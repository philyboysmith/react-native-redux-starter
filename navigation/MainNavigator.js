import { createStackNavigator } from 'react-navigation-stack';

import HomeContainer from '../containers/main/Home/HomeContainer';

const MainNavigator = createStackNavigator({
  Home: {
    screen: HomeContainer,
  },
});

export default MainNavigator;
