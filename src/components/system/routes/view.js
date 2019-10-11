import React from 'react';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux';
import {
  Home,
  Comics,
  Characters,
  CharacterAdd,
  CharacterDetail,
} from '../../pages';
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
        key="Characters"
        component={Characters}
        rightTitle={'Add'}
        onRight={() => Actions.CharacterAdd()}
        {...navBarStyles}
      />
      <Scene
        key="CharacterAdd"
        component={CharacterAdd}
        title={'Add Character'}
        {...navBarStyles}
      />
      <Scene
        key="CharacterDetail"
        component={CharacterDetail}
        title={'Character Detail'}
        {...navBarStyles}
      />
      <Scene key="Characters" component={Characters} {...navBarStyles} />
    </Stack>
  </Router>
);

export default Routes;
