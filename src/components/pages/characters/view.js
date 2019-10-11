import React, {Component} from 'react';
import {SafeAreaView, FlatList, RefreshControl, Text, View} from 'react-native';
import {CharacterCell} from '../../molecules';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';

class Characters extends Component {
  constructor(props) {
    super(props);
    this.props.initCharactersList();
  }

  _onCharacterTapped = character => {
    this.props.updateCharacter(character);
    const title = _.get(character, 'name', 'Character');
    Actions.CharacterDetail({title});
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
      this.props.updateCharactersListOffset();
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
              onRefresh={this.props.initCharactersList}
              tintColor={'white'}
              colors={['white']}
            />
          }
        />
      </SafeAreaView>
    );
  }
}

export default Characters;
