import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.task) {
      this.props.addTask(this.state.task);
      this.setState({
        task: '',
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button type="submit">Добавить задачу</button>
      </form>
    );
  }
}

export default Form;
