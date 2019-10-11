import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';

class Characters extends Component {
  constructor(props) {
    super(props);
    this.props.fetchCharactersList();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.label}>CHARACTERS</Text>
        <Text style={styles.subLabel}>
          Coming Soon! This will be available in future version. Thanks for your
          support.
        </Text>
      </SafeAreaView>
    );
  }
}

export default Characters;
