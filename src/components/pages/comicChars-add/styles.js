import {StyleSheet} from 'react-native';
import colors from '../../../assests/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
  },
  inputContainer: {
    margin: 20,
  },
  label: {
    color: colors.white,
    marginBottom: 10,
    fontSize: 16,
  },
  inputView: {
    borderWidth: 1,
    borderColor: colors.red,
    borderRadius: 4,
  },
  input: {margin: 10, color: 'rgba(255,255,255,0.9)'},

  buttonContainer: {
    backgroundColor: 'rgba(255,0,34, 0.6)',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 16,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  activityIndicator: {
    marginLeft: 10,
  },
  imageInputContainer: {
    marginTop: 40,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    marginHorizontal: 20,
  },
  imageInputButton: {
    backgroundColor: colors.grey,
    padding: 10,
    borderRadius: 4,
    zIndex: 1,
  },
  imageInputLabel: {
    color: colors.white,
    opacity: 0.6,
    textTransform: 'uppercase',
  },
  imageInputPreview: {
    overflow: 'hidden',
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
