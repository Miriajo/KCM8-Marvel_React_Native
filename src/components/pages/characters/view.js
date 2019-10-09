import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';

class Characters extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.label}>CHARACTERS</Text>
      </SafeAreaView>
    );
  }
}

export default Characters;
