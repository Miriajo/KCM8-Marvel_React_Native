import {StyleSheet} from 'react-native';
import colors from '../../../assests/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    color: colors.white,
  },
  subLabel: {
    width: '60%',
    color: colors.white,
    textAlign: 'center',
  },
});
