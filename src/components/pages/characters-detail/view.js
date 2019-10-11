import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import styles from './styles';
import _ from 'lodash';

const IMAGE_HEIGHT = 400;
class CharactersDetail extends React.Component {
  state = {
    animatedHeight: new Animated.Value(IMAGE_HEIGHT),
    showImage: true,
  };

  _onShowImageTapped = () => {
    const {showImage, animatedHeight} = this.state;
    if (showImage) {
      Animated.timing(animatedHeight, {duration: 500, toValue: 0}).start();
    } else {
      Animated.timing(animatedHeight, {
        duration: 500,
        toValue: IMAGE_HEIGHT,
      }).start();
    }
    this.setState({showImage: !showImage});
  };

  render() {
    const {character} = this.props;
    const {showImage, animatedHeight} = this.state;
    const name = _.get(character, 'name', '');
    const description = _.get(character, 'description', '');
    const thumbnail = _.get(character, 'thumbnail', '');
    const image = _.get(character, 'image', '');

    var url = '';
    if (thumbnail.path !== '') {
      url = thumbnail.path + '.' + thumbnail.extension;
    } else {
      url = _.get(image, 'uri', '');
    }

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
          <Animated.Image
            style={{...styles.image, height: animatedHeight}}
            source={{uri: url}}
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this._onShowImageTapped}>
            <Text style={styles.buttonLabel}>
              {showImage ? 'Ocultar imagen' : 'Mostrar imagen'}
            </Text>
          </TouchableOpacity>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>{name}</Text>
            <Text style={styles.label}>{description}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default CharactersDetail;
