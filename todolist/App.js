import React from "react";
import TaskList from "./TaskList";
import {Navigator} from 'react-native-deprecated-custom-components';
import TaskForm from "./TaskForm";

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      todos: [
        {
          task: 'Learn React Native'
        },
        {
          task: 'Learn Redux'
        }
      ]
    };
  }

  onAddStarted() {
    this.nav.push({
      name: 'taskform'
    });
  }

  onCancel(){
    this.nav.pop();
  }

  onDone(todo){
    console.log('todo was completed: ', todo.task);
    const filterTodos = 
        this.state.todos.filter((filterTodo)=>{
            return filterTodo !== todo;
    });
    this.setState({ todos: filterTodos});
  }

  onAdd(task){
    console.log('a task was added: ', task);
    this.state.todos.push({
      task: task,
    });
    this.setState({todos: this.state.todos}),
    this.nav.pop();
  }

  renderScene(route, nav) {
    switch (route.name) {
      case "taskform":
        return (
          <TaskForm 
            onAdd={this.onAdd.bind(this)}
            onCancel={this.onCancel.bind(this)}
          />
        );
      default:
        return (
          <TaskList
            onAddStarted={this.onAddStarted.bind(this)}
            onDone={this.onDone.bind(this)}
            todos={this.state.todos}
          />
        );
    }
  }

  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  render() {
    return (
      <Navigator
        configureScene={this.configureScene}
        initialRoute={{ name: "tasklist", index: 0 }}
        ref={nav => {
          this.nav = nav;
        }}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}
