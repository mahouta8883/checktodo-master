import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tasksReducer from './reducers';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import './App.css'; 

const store = createStore(tasksReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>ToDo Application</h1>
        <div className="add-task-container">
          <AddTask />
        </div>
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;