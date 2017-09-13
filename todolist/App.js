import React from "react";
import TaskList from './TaskList'

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [
        {
          task: "Learn React Native"
        },
        {
          task: "Learn Redux"
        }
      ]
    };
  }

  onAddStarted(){
      console.log('on add started');
  }

  render() {
    return (
      <TaskList
        onAddStarted={this.onAddStarted.bind(this)}
        todos={this.state.todos}
      />
    );
  }
}
