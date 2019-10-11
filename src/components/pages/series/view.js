import React from 'react';
import {SafeAreaView, FlatList, RefreshControl} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import {ComicCell} from '../../molecules';
import _ from 'lodash';

class Series extends React.Component {
  componentDidMount() {
    this.props.fetchSeriesList();
  }

  _onComicTapped = comic => {
    this.props.updateItem(comic);
    Actions.Characters({title: _.get(comic, 'title', 'Characters')});
  };

  _renderItem = ({item}) => (
    <ComicCell
      comic={item}
      onComicPress={comic => this._onComicTapped(comic)}
    />
  );

  render() {
    const {comicsList, isFetching} = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={comicsList}
          renderItem={this._renderItem}
          keyExtractor={item => `comic${item.id}`}
          numColumns={2}
          extraData={this.props}
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={this.props.fetchComicsList}
              tintColor={'white'}
              colors={['white']}
            />
          }
        />
      </SafeAreaView>
    );
  }
}

export default Series;
