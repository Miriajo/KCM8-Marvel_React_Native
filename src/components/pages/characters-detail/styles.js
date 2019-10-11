import {StyleSheet} from 'react-native';
import colors from '../../../assests/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
  },
  image: {width: '100%', resizeMode: 'cover'},
  label: {color: colors.white, opacity: 0.8, fontWeight: '600', marginTop: 30},
  infoContainer: {paddingHorizontal: 20},
  buttonContainer: {
    backgroundColor: 'rgba(255,255,255, 0.6)',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  activityIndicator: {
    marginLeft: 10,
  },
});
