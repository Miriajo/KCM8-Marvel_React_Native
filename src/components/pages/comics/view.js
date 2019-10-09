import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import styles from './styles';
import * as api from '../../../api';
import _ from 'lodash';

class Comics extends Component {
  state = {
    comics: [],
  };

  componentDidMount() {
    this._loadComicsList();
  }

  _loadComicsList = async () => {
    try {
      const getComicsRes = await api.getComics();
      const comics = _.get(getComicsRes, 'data.data.results', []);
      console.log('comics: ', comics);
      this.setState({comics: comics});
    } catch (e) {
      console.log('getComics err: ', e);
    } finally {
    }
  };

  _renderItem = ({item}) => {
    const imagePath = _.get(item, 'thumbnail.path');
    const imageExt = _.get(item, 'thumbnail.extension');
    const imageDir = imagePath + '.' + imageExt;

    return (
      <TouchableOpacity style={{flex: 1}}>
        <Image source={{uri: imageDir}} style={styles.imgComicBtn} />
      </TouchableOpacity>
    );
  };

  render() {
    console.log('this.state.comics: ', this.state.comics);

    const comics = this.state.comics;

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={comics}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => `comic${index}`}
          numColumns={2}
        />
      </SafeAreaView>
    );
  }
}

export default Comics;
