import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Display extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>
          {this.props.display ? this.props.display : '0' }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    margin: 17,
    marginBottom: 5,
    fontSize: 90,
    textAlign: 'right',
    color: 'white',
  },
});
