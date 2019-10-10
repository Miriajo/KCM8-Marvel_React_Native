import React, {Component} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import styles from './styles';
import * as api from '../../../api';
import _ from 'lodash';
import {ComicCell} from '../../molecules';

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

      this.props.setComicsList(comics);

      dispatch(setComicsList(comics));
    } catch (e) {
      console.log('getComics err: ', e);
    }
  };

  _renderItem = ({item}) => (
    <ComicCell
      comic={item}
      onComicPress={comic => console.log('comic selected: ', comic)}
    />
  );

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
