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
  logo: {
    height: '10%',
    width: '40%',
    alignSelf: 'center',
    resizeMode: 'cover',
    backgroundColor: colors.red,
  },
  logoContainer: {
    backgroundColor: colors.red,
  },
});
