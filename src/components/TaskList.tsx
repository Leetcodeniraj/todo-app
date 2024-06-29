import React from 'react';
import './TaskList.scss';

const TaskList:React.FC = () => {
  return (
    <>
    <div className='task_list_section'>
      <div className='task_list_item'>
        <input type='checkbox' title='check' className='task_checkbox'></input>
        <input type='text' title='input' className='task_input'></input>
        <button type='button' title='submit'>Remove</button>

 
      </div>
    </div>



    </>
  )
}

export default TaskList
