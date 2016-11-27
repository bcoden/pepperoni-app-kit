import React, {PropTypes} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Button,
  View
} from 'react-native';
import Container from '../components/Container';

const onButtonPress = () => {
  alert('test');
};

const Control = React.createClass({
  propTypes: {
    action: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    color: PropTypes.string
  }, // will hold property types specific to view
  render() {
    // add addtional properties here
    return (
      <View>
        <TouchableOpacity onPress={onButtonPress}>
          <Container action={this.props.action} title={this.props.title} />
        </TouchableOpacity>
      </View>
    );
  }
});

export default Control;