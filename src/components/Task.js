import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {editTask  ,toggleTaskStatus } from '../redux/actions/actions';


const Task = ({ task }) => {
  const [editable, setEditable] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEditToggle = () => {
    setEditable(!editable);
  };

  const handleEditTask = () => {
    dispatch(editTask({ ...task, description: editedDescription }));
    setEditable(false);
  };

  const handleToggleStatus = () => {
    dispatch(toggleTaskStatus(task.id));
  };

  return (
    <div>
      {editable ? (
        <input
          type="text"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
      ) : (
        <span>{task.description}</span>
      )}
      <button onClick={editable ? handleEditTask : handleEditToggle}>
        {editable ? 'Save' : 'Edit'}
      </button>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggleStatus}
      />
      <label>Done</label>
    </div>
  );
};

export default Task;