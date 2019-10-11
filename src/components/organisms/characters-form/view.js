import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Image,
} from 'react-native';
import styles from './styles';
import _ from 'lodash';
import ImagePicker from 'react-native-image-picker';
import {IMAGES_OPTIONS} from '../../../config/images';

class CharacterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: _.get(props, 'character.name', ''),
      description: _.get(props, 'character.description', ''),
      thumbnail: _.get(props, 'character.thumbnail', ''),
      image: _.has(props, 'character.image.data')
        ? {uri: props.character.image.data}
        : '',
    };
  }

  _onSubmit = () => {
    const {isFetching, comic} = this.props;
    const {name, description, thumbnail, image} = this.state;

    if (isFetching) {
      return;
    }

    if (!name) {
      Alert.alert('Missing Data', 'Please, enter a Name.');
      return;
    }

    const data = {
      comic: _.get(comic, 'id'),
      name,
      description,
      thumbnail,
      image: _.has(this.state, 'image.data')
        ? 'data:image/jpeg;base64,' + image.data
        : '',
    };

    this.props.postCharacter(data);
  };

  _onImageTapped = () => {
    ImagePicker.showImagePicker(IMAGES_OPTIONS, response => {
      if (response.uri) {
        // GET PATH AND EXTENSION INDEPENDENTLY
        var posExt = response.uri.indexOf('.jpg');

        if (posExt => 0) {
          const path = response.uri.substring(0, posExt - 1);

          this.setState({
            thumbnail: {
              path: 'data:image/jpeg;base64,' + response.data,
              extension: 'jpg',
            },
          });
        } else {
          posExt = response.uri.indexOf('.png');
          if (posExt => 0) {
            const path = response.uri.substring(0, posExt - 1);

            this.setState({thumbnail: {path: path, extension: 'png'}});
          }
        }

        this.setState({image: response});
      }
    });
  };

  render() {
    const {isFetching} = this.props;
    const {name, description, thumbnail, image} = this.state;

    var url = '';
    if (thumbnail.path !== '') {
      url = thumbnail.path + '.' + thumbnail.extension;
    } else {
      url = _.get(image, 'uri', '');
    }

    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.imageInputContainer}
          onPress={this._onImageTapped}>
          <Image source={{uri: url}} style={styles.imageInputPreview} />
          <View style={styles.imageInputButton}>
            <Text style={styles.imageInputLabel}>{'Choose image'}</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>{'Name:'}</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={name => this.setState({name})}
              placeholder={'Name'}
              placeholderTextColor={'rgba(255,255,255,0.6)'}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{'Description:'}</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              value={description}
              onChangeText={description => this.setState({description})}
              placeholder={'Description'}
              placeholderTextColor={'rgba(255,255,255,0.6)'}
              underlineColorAndroid={'transparent'}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this._onSubmit}>
          <Text style={styles.buttonLabel}>{'Add Character'}</Text>
          {isFetching ? (
            <ActivityIndicator
              color={'black'}
              style={styles.activityIndicator}
            />
          ) : null}
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default CharacterForm;
