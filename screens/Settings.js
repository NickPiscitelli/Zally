import React, { Component } from 'react';
import Settings from './Library/Settings.js';

class Settings extends Component {
  handleSettingsPress = () => {
    this.props.navigation.navigate('Settings');
  };

  render() {
    return <Settings />;
    );
  }
}

export default Settings;