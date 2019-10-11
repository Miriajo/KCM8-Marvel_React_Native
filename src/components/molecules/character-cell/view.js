import React from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';
import _ from 'lodash';
import styles from './styles';
import PropTypes from 'prop-types';

const CharacterCell = ({character, onPress}) => {
  const name = _.get(character, 'name', '');

  // get the thumnail image for comic
  const imagePath = _.get(character, 'thumbnail.path');
  const imageExt = _.get(character, 'thumbnail.extension');
  const imageDir = imagePath + '.' + imageExt;

  console.log('character: ', character);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{uri: imageDir}} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

CharacterCell.defaultProps = {
  onPress: () => {},
};

CharacterCell.propTypes = {
  character: PropTypes.object.isRequired,
  onPress: PropTypes.func,
};

export default CharacterCell;
