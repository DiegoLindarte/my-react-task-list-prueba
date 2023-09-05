import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TaskListAdd } from './components/TaskListAdd'
import { TaskList } from './components/TaskList'
import { useTaskList } from './hooks/useTaskList'

function App() {
  //const [count, setCount] = useState(0)
  const {
        tasklists,
        taskListsCount,
        pendingTaskListsCount,
        handleNewTaskList,
        handleDeleteTaskList,
        handleCompleteTaskList,
        handleUpdateTaskList,
  } = useTaskList()

  return (
    <>

      <div className="card-task-list">
        <h1>Lista de Tareas</h1>
        <div className="counter-task-list">
          <h2>
            N° Tareas: <span>{taskListsCount}</span>
          </h2>
          <h2>
            Tareas Pendientes: <span>{pendingTaskListsCount}</span>
          </h2>
        </div>
          <h2>Agregar Tarea</h2>
          <TaskListAdd handleNewTaskList={handleNewTaskList}/>
        <div className="add-task-list">

        </div>
        <TaskList
          tasklists={tasklists}
          handleUpdateTaskList={handleUpdateTaskList}
          handleDeleteTaskList={handleDeleteTaskList}
          handleCompleteTaskList={handleCompleteTaskList}
        />
      </div>
    </>
  )
}

export default App
