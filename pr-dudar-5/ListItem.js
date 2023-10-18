import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class ListItem extends React.Component {
  handleRemove = () => {
    this.props.removeTask();
  };

  render() {
    return (
      <TouchableOpacity onPress={this.handleRemove}>
        <View style={styles.container}>
          <Text>{this.props.task}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});

export default ListItem;