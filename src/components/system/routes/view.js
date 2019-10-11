import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {Home, Comics, ComicCharacters, Characters} from '../../pages';
import {navBarStyles, navBarLogoStyles} from './styles';

const Routes = () => (
  <Router>
    <Stack key="root">
      <Scene
        key="Home"
        component={Home}
        navigationBarTitleImage={require('../../../assests/images/Marvel_logo_red.png')}
        navigationBarTitleImageStyle={navBarLogoStyles}
        {...navBarStyles}
      />
      <Scene key="Comics" component={Comics} {...navBarStyles} />
      <Scene
        key="ComicCharacters"
        component={ComicCharacters}
        {...navBarStyles}
      />
      <Scene key="Characters" component={Characters} {...navBarStyles} />
    </Stack>
  </Router>
);

export default Routes;
