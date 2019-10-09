import {StyleSheet} from 'react-native';
import colors from '../../../assests/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: '10%',
    width: '40%',
    alignSelf: 'center',
    resizeMode: 'cover',
    backgroundColor: colors.red,
  },
  btnComics: {
    paddingBottom: 5,
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    height: '50%',
    width: '100%',
    borderRadius: 4,
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCharacters: {
    paddingTop: 5,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    height: '50%',
    width: '100%',
    borderRadius: 4,
    marginTop: 1,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
});
