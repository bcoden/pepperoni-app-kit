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
        const colors = setColors(this.props.color);
        styles.container = {
           backgroundColor: colors.main,
            ...containerBase
        };

        styles.text = {
            backgroundColor: colors.highlight,
            ...textBase
        }

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
    main: 'rgba(24, 165, 93, 1.0)',
    highlight: 'rgba(20, 149, 83, 1.0)'
  };

  switch (color) {
    case "red":
      colors = {
        main: 'rgba(243, 106, 89, 1.0)',
        highlight: 'rgba(219, 96, 80, 1.0)'
      }
    break;
    case "orange":
      colors = {
        main: 'rgba(241, 155, 44, 1.0)',
        highlight: 'rgba(217, 140, 39, 1.0)'
      }
    break;
    case "blue":
      colors = {
        main: 'rgba(17, 116, 181, 1.0)',
        highlight: 'rgba(14, 105, 163, 1.0)'
      }
    break;
    default:
  }
  return colors;
};

const global = {
    padding: 20,
    color: 'rgba(255, 255, 255, 1.0)',
    flexDirection: 'row',
    textAlign: 'center',
    lineHeight: 10
};

const textBase = {
    ...global,
     bottom: 0,
     padding: 40,
};

const containerBase = {
    height: 100
};

const styles = StyleSheet.create( {
  container: {
    backgroundColor: 'rgba(24, 165, 93, 1.0)',
    ...containerBase
  },
  action: 
  {
    ...global,
    fontSize: 20,
    fontWeight: 'bold',
    top: 0,
    padding: 20
  },
  text: 
  {
    ...textBase,
    backgroundColor: 'rgba(20, 149, 83, 1.0)',
  }
}); // update styles here

export default Container;