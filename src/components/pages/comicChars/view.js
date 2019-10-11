import React, {Component} from 'react';
import {SafeAreaView, FlatList, RefreshControl, Text, View} from 'react-native';
import {CharacterCell} from '../../molecules';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';

class ComicCharacters extends Component {
  constructor(props) {
    super(props);
    this.props.initComicCharactersList();
  }

  _onCharacterTapped = character => {
    this.props.updateCharacter(character);
    const title = _.get(character, 'name', 'Character');
    //Actions.CharactersDetail({title});
  };

  _renderItem = ({item}) => (
    <CharacterCell
      character={item}
      onPress={() => this._onCharacterTapped(item)}
    />
  );

  _onEndReached = ({distanceFromEnd}) => {
    const {isFetching, charactersList, total} = this.props;
    const onEndReached =
      distanceFromEnd > 100 && !isFetching && charactersList.length < total;
    if (onEndReached) {
      this.props.updateComicCharactersListOffset();
    }
  };

  render() {
    const {charactersList, isFetching} = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={charactersList}
          renderItem={this._renderItem}
          keyExtractor={item => `character-${item.id}`}
          extraData={this.props}
          onEndReached={this._onEndReached}
          onEndReachedThreshold={0.8}
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={this.props.initComicCharactersList}
              tintColor={'white'}
              colors={['white']}
            />
          }
        />
      </SafeAreaView>
    );
  }
}

export default ComicCharacters;
