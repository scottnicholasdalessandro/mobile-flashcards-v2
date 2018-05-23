import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AsyncStorage} from 'react-native';

export default class App extends React.Component {
  state = {

  }
  componentWillMount() {
    const DECKS_KEY = 'DecksKey';

    function setDummyData() {
      const dummyData = {
        React: {
          title: 'React',
          questions: [
            {
              question: 'What is React?',
              answer: 'A library for managing user interfaces'
            },
            {
              question: 'Where do you make Ajax requests in React?',
              answer: 'The componentDidMount lifecycle event'
            }
          ]
        },
        JavaScript: {
          title: 'JavaScript',
          questions: [
            {
              question: 'What is a closure?',
              answer:
                'The combination of a function and the lexical environment within which that function was declared.'
            }
          ]
        }
      };

      return AsyncStorage.setItem(DECKS_KEY, JSON.stringify(dummyData));

      
    }

    // why is the promise not fulfilled or rejected?
    setDummyData()
      .then(() => {
        return AsyncStorage.getItem(DECKS_KEY);
      })
      .then(decks => {
        console.log(decks);
      })
      .catch(err => console.log(err));

      // doesn't fulfill or reject promise
      AsyncStorage.getItem(DECKS_KEY)
        .then(decks => {
          console.log(decks);
          this.setState({
            decks
          });
        }, rejected => {
          console.log(rejected);
        })
        .catch(err => console.log(err));
      
        console.log('componentWillMount is invoked');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>{Object.keys(this.state)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
