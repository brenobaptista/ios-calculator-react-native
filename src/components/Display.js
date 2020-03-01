import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Display(props) {
  return (
    <View>
      <Text style={styles.title}>
        {props.display}
      </Text>
    </View>
  );
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
