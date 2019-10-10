import React from 'react';
import {StatusBar, YellowBox} from 'react-native';
import Routes from '../routes';

class App extends React.Component {
  constructor(props) {
    super(props);
    YellowBox.ignoreWarnings(['Warning: componentWillReceivedProps']);
    StatusBar.setBarStyle('light-content', false);
  }
  render() {
    return <Routes />;
  }
}

export default App;
