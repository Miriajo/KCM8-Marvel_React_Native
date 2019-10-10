import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import _ from 'lodash';
import styles from './styles';
import PropTypes from 'prop-types';

class ComicCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {imageWidth: 0, imageHeight: 0};
  }

  render() {
    const {comic, onComicPress} = this.props;

    // get the thumnail image for comic
    const imagePath = _.get(comic, 'thumbnail.path');
    const imageExt = _.get(comic, 'thumbnail.extension');
    const imageDir = imagePath + '/portrait_fantastic.' + imageExt;

    return (
      <TouchableOpacity style={{flex: 1}} onPress={() => onComicPress(comic)}>
        <Image source={{uri: imageDir}} style={styles.imgComicBtn} />
      </TouchableOpacity>
    );
  }
}

ComicCell.defaultProps = {
  onComicPress: () => {},
};

ComicCell.propTypes = {
  comic: PropTypes.object.isRequired,
  onComicPress: PropTypes.func,
};

export default ComicCell;
