import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import Form from './Form';
import ListItem from './ListItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ["Купить хлеб ", "Убрать дом ", "Отнести справку ", "Посмотреть видеоурок "],
    };
  }


  addTask = (task) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));
  };

  removeTask = (index) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((item, i) => i !== index),
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Form addTask={this.addTask} />
        {this.state.tasks.map((task, index) => (
          <ListItem key={index} task={task} removeTask={() => this.removeTask(index)} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;