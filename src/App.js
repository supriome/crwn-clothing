import React from 'react';
import HomePage from "./pages/HomePage";
import {
  Switch,
  Route
} from "react-router-dom";

const TopicList = (props) => {
  console.log('props :>> ', props);
  return (
    <div>
      <h1>
        Shop List
      </h1>
    </div>
  )
}

const TopicDetail = (props) => {
  console.log('props :>> ', props);
  return (
    <div>
      <h1>
        This is shop detail: {props.match.params.topic}
      </h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={TopicList} />
        <Route exact path='/shop/:topic' component={TopicDetail} />
      </Switch>
    </div>
  );
}

export default App;
