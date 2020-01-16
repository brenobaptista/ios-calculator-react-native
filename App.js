import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Feather from 'react-native-vector-icons/Feather';

import Button from './components/Button';
import Display from './components/Display';

let variableA;
let variableB;

export default class App extends React.Component {
  state = {
    display: '',
    operation: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <Display display={this.state.display} />
        <View style={styles.row}>
          <Button
            backgroundColor="#A6A6A6"
            color="black"
            text={(this.state.display || this.state.operation) ? 'C' : 'AC'}
            function={() => {
              this.setState({
                display: '',
                operation: '',
              });
            }}
          />
          <Button
            backgroundColor="#A6A6A6"
            color="black"
            text="+/-"
            function={() => {
              this.setState(prevState => ({
                display: (prevState.display *= -1),
              }));
            }}
          />
          <Button
            backgroundColor="#A6A6A6"
            color="black"
            text="%"
            function={() => {
              this.setState(prevState => ({
                display: prevState.display / 100,
              }));
            }}
          />
          <Button
            orange
            backgroundColor={
              this.state.operation === 'division' ? 'white' : '#FF9404'
            }
            color={this.state.operation === 'division' ? '#FF9404' : 'white'}
            text="÷"
            function={() => {
              variableA = Number(this.state.display);
              this.setState({
                display: '',
                operation: 'division',
              });
            }}
          />
        </View>
        <View style={styles.row}>
          <Button
            backgroundColor="#333333"
            color="white"
            text="7"
            function={() =>
              this.setState(prevState => ({
                display: prevState.display + '7',
              }))
            }
          />
          <Button
            backgroundColor="#333333"
            color="white"
            text="8"
            function={() =>
              this.setState(prevState => ({
                display: prevState.display + '8',
              }))
            }
          />
          <Button
            backgroundColor="#333333"
            color="white"
            text="9"
            function={() =>
              this.setState(prevState => ({
                display: prevState.display + '9',
              }))
            }
          />
          <Button
            orange
            backgroundColor={
              this.state.operation === 'multiplication' ? 'white' : '#FF9404'
            }
            function={() => {
              variableA = Number(this.state.display);
              this.setState({
                display: '',
                operation: 'multiplication',
              });
            }}>
            <Feather
              name={'x'}
              size={25}
              color={
                this.state.operation === 'multiplication' ? '#FF9404' : 'white'
              }
              style={styles.icon}
            />
          </Button>
        </View>
        <View style={styles.row}>
          <Button
            backgroundColor="#333333"
            color="white"
            text="4"
            function={() =>
              this.setState(prevState => ({
                display: prevState.display + '4',
              }))
            }
          />
          <Button
            backgroundColor="#333333"
            color="white"
            text="5"
            function={() =>
              this.setState(prevState => ({
                display: prevState.display + '5',
              }))
            }
          />
          <Button
            backgroundColor="#333333"
            color="white"
            text="6"
            function={() =>
              this.setState(prevState => ({
                display: prevState.display + '6',
              }))
            }
          />
          <Button
            orange
            backgroundColor={
              this.state.operation === 'subtraction' ? 'white' : '#FF9404'
            }
            function={() => {
              variableA = Number(this.state.display);
              this.setState({
                display: '',
                operation: 'subtraction',
              });
            }}>
            <Feather
              name={'minus'}
              size={25}
              color={
                this.state.operation === 'subtraction' ? '#FF9404' : 'white'
              }
              style={styles.icon}
            />
          </Button>
        </View>
        <View style={styles.row}>
          <Button
            backgroundColor="#333333"
            color="white"
            text="1"
            function={() =>
              this.setState(prevState => ({
                display: prevState.display + '1',
              }))
            }
          />
          <Button
            backgroundColor="#333333"
            color="white"
            text="2"
            function={() =>
              this.setState(prevState => ({
                display: prevState.display + '2',
              }))
            }
          />
          <Button
            backgroundColor="#333333"
            color="white"
            text="3"
            function={() =>
              this.setState(prevState => ({
                display: prevState.display + '3',
              }))
            }
          />
          <Button
            orange
            backgroundColor={
              this.state.operation === 'addition' ? 'white' : '#FF9404'
            }
            function={() => {
              variableA = Number(this.state.display);
              this.setState({
                display: '',
                operation: 'addition',
              });
            }}>
            <Feather
              name={'plus'}
              size={25}
              color={this.state.operation === 'addition' ? '#FF9404' : 'white'}
              style={styles.icon}
            />
          </Button>
        </View>
        <View style={styles.row}>
          <Button
            special
            backgroundColor="#333333"
            color="white"
            text="0"
            function={() =>
              this.setState(prevState => ({
                display: prevState.display + '0',
              }))
            }
          />
          <Button
            backgroundColor="#333333"
            color="white"
            text="."
            function={() => {
              if (Math.round(this.state.display) == this.state.display) {
                this.setState(prevState => ({
                  display: prevState.display + '.',
                }));
              }
            }}
          />
          <Button
            orange
            backgroundColor="#FF9404"
            color="white"
            text="="
            function={() => {
              switch (this.state.operation) {
                case 'division':
                  variableB = Number(this.state.display);
                  this.setState({
                    display: variableA / variableB,
                    operation: '',
                  });
                  break;
                case 'multiplication':
                  variableB = Number(this.state.display);
                  this.setState({
                    display: variableA * variableB,
                    operation: '',
                  });
                  break;
                case 'subtraction':
                  variableB = Number(this.state.display);
                  this.setState(prevState => ({
                    display: variableA - variableB,
                    operation: '',
                  }));
                  break;
                case 'addition':
                  variableB = Number(this.state.display);
                  this.setState({
                    display: variableA + variableB,
                    operation: '',
                  });
                  break;
              }
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
    padding: 8,
    paddingBottom: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
    marginBottom: 7,
  },
  icon: {
    textAlign: 'center',
  },
});
