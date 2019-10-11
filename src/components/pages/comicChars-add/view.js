import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import styles from './styles';
import _ from 'lodash';
//import ImagePicker from 'react-native-image-picker';
//import {postCharacter} from '../../../redux/characters/actions';

class ComicCharacterAdd extends React.Component {
  state = {
    name: '',
    description: '',
    //thumbnail: {path: '', extension: ''},
  };

  _onSubmit = () => {
    const {isFetching, comic} = this.props;
    console.log('this.state: ', this.state);
    const {name, description} = this.state;
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
      //thumbnail: {path: '', extension: ''},
    };

    console.log('data: ', data);
    this.props.postCharacter(data);
  };

  render() {
    const {isFetching} = this.props;
    const {name, description} = this.state;

    return (
      <SafeAreaView style={styles.container}>
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

export default ComicCharacterAdd;
