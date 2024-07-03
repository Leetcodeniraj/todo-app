import React, { useState } from "react";
import "./App.scss";
import TaskList from "./components/TaskList";
import CompletedTask from "./components/CompletedTask";
import { IInputField } from "./interface/toDo";

const App: React.FC = () => {
  const [sharedState, setSharedState] = useState<IInputField[]>([]);
  return (
    <>
      <div className="todo_app_section">
        <div className="todo_app_container">
          <div className="new_task_list task_list">
            <h4>Task List</h4>
            <div>
              <TaskList
                sharedState={sharedState}
                setSharedState={setSharedState}
              />
            </div>
          </div>

          <div className="completed_task_list">
            <h4>Completed Task</h4>
            <div>
              <CompletedTask
                sharedState={sharedState}
                setSharedState={setSharedState}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

