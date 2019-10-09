import {StyleSheet} from 'react-native';
import colors from '../../../assests/colors';

export default StyleSheet.create({});

export const navBarStyles = {
  navigationBarStyle: {backgroundColor: colors.navBar},
  titleStyle: {color: colors.white},
  backButtonTextStyle: {color: colors.white},
  backButtonTintColor: colors.white,
  rightButtonTextStyle: {color: colors.white},
  rightButtonTintColor: colors.white,
};

export const navBarLogoStyles = {
  width: 84,
  height: 33,
  alignItems: 'center',
};
