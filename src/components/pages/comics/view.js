import React, {Component} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import styles from './styles';
import * as api from '../../../api';
import _ from 'lodash';
import {ComicCell} from '../../molecules';

class Comics extends Component {
  componentDidMount() {
    this.props.fetchComicsList();
  }

  _renderItem = ({item}) => (
    <ComicCell
      comic={item}
      onComicPress={comic => console.log('comic selected: ', comic)}
    />
  );

  render() {
    const {comicsList} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={comicsList}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => `comic${item.id}`}
          numColumns={2}
        />
      </SafeAreaView>
    );
  }
}

export default Comics;
