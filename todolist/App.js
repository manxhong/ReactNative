import React from "react";
import TaskList from "./TaskList";
import {Text} from "react-native";
import {Navigator} from 'react-native-deprecated-custom-components';
import TaskForm from "./TaskForm";

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

  onAddStarted() {
    this.nav.push({
      name: "taskform"
    });
  }

  renderScene(route, nav) {
    switch (route.name) {
      case "taskform":
        return (
          <TaskForm />
        );
      default:
        return (
          <TaskList
            onAddStarted={this.onAddStarted.bind(this)}
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
