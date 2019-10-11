import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';

class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={() => Actions.Comics({title: 'Comics', hola: 'hola'})}
          style={styles.btnComics}>
          <Image
            source={require('../../../assests/images/Marvel-Comics-BTN.png')}
            style={styles.btnImage}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={
            () => {} //Actions.Characters({title: 'Characters', adios: 'adios'})
          }
          style={styles.btnCharacters}>
          <Image
            source={require('../../../assests/images/Marvel-CHARS-BTN.png')}
            style={styles.btnImage}
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default Home;
