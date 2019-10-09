import {StyleSheet} from 'react-native';
import colors from '../../../assests/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
  },
  label: {
    color: colors.white,
  },
  imgComicBtn: {
    width: '100%',
    height: 250,
    resizeMode: 'stretch',
  },
});
