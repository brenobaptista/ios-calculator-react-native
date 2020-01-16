import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

const { width: WIDTH } = Dimensions.get('window');

export default class Button extends React.Component {
  render() {
    return (
      <View>
        <TouchableHighlight
          underlayColor={this.props.orange ? '#ffc56b' : '#c9c9c9'}
          activeOpacity={1}
          onPress={this.props.function}
          style={[
            this.props.special ? styles.specialButton : styles.button,
            {
              backgroundColor: this.props.backgroundColor,
              justifyContent: 'center',
            },
          ]}>
          <View>
            {this.props.children ? this.props.children : (
              <Text
                style={[
                  this.props.special ? styles.specialText : styles.text,
                  { color: this.props.color },
                ]}>
                {this.props.text}
              </Text>
            )}
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 76,
    height: 76,
    borderRadius: 38,
  },
  specialButton: {
    width: (WIDTH - 4 * 76) / 5 + 2 * 76,
    height: 76,
    borderRadius: 38,
  },
  specialText: {
    paddingLeft: 27,
    fontSize: 32,
  },
  text: {
    textAlign: 'center',
    fontSize: 32,
  },
});
