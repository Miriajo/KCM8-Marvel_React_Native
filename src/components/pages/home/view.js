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
          onPress={() => Actions.Series({title: 'Series', hola: 'hola'})}
          style={styles.btnCharacters}>
          <Image
            source={require('../../../assests/images/Marvel-SERIES-BTN.png')}
            style={styles.btnImage}
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default Home;
