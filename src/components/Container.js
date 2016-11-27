import React, {PropTypes} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const Container = React.createClass({
    propTypes: {
        action: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        color: PropTypes.string
    },
    render() {
        // set color
        const colors = setColors(this.props.action);
        return (
            <View style={styles.container}>
                <Text style={styles.action} numberOfLines={2}>
                    {this.props.action}
                </Text>
                <Text style={styles.text} numberOfLines={2}>
                    {this.props.title}
                </Text>
            </View>
        );
    }
});

const setColors = function(color) {
  var colors = {
    main: 'rgba(255, 255, 255, 1.0)',
    highlight: 'rgba(24, 165, 93, 1.0)'
  };

  switch (color) {
    case "red":
      colors = {
        main: 'rgba(255, 255, 255, 1.0)',
        highlight: 'rgba(255, 255, 255, 1.0)'
      }
    break;
    case "yellow":
      colors = {
        main: 'rgba(255, 255, 255, 1.0)',
        highlight: 'rgba(255, 255, 255, 1.0)'
      }
    break;
    case "blue":
      colors = {
        main: 'rgba(255, 255, 255, 1.0)',
        highlight: 'rgba(255, 255, 255, 1.0)'
      }
    break;
    default:
  }
  return colors;
};

const global = {
  flex: 1,
    justifyContent: 'center',
    padding: 20,
    color: 'rgba(255, 255, 255, 1.0)',
    flexDirection: 'row',
    textAlign: 'center',
    lineHeight: 10
};

const styles = StyleSheet.create( {
  container: {
    backgroundColor: 'rgba(24, 165, 93, 1.0)',
    height: 100
  },
  action: 
  {
    ...global,
    fontSize: 20,
    fontWeight: 'bold',
    top: 0,
    padding: 60
  },
  text: 
  {
    ...global,
    backgroundColor: 'rgba(20, 149, 83, 1.0)',
    bottom: 0,
    padding: 40,
  }
}); // update styles here

export default Container;