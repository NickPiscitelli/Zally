import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class ZText extends Component {
  render() {
      return <Text style={[{color: '#ffffff', fontSize: 20}, this.props.style]}>{this.props.children}</Text>
  }
}

export default ZText;
