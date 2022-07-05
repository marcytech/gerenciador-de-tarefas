
import Notification from './components/Notification'
import Button from './components/Button'
import CreateTask from './components/CreateTask'
import Tasks from './components/Tasks'
import { useState } from 'react'
import './App.css'

function App() {

  const [ showForm, setShowForm ] = useState(false)
  const [ tasks, setTasks ] = useState([])
  const [ taskToEdit, setTaskToEdit ] = useState(null)


  const updateTask = (taskToUpdate) => {
    const updatedTasks = tasks.map( task => {
      return task.id === taskToUpdate.id ? taskToUpdate : task
    })

    setTasks([...updatedTasks])
    setShowForm(false)
    setTaskToEdit(null)
  }
  
  
  return (
    <div className="App">
      <div className="btn_box">
        <Button type="rounded"
        label="+"
        action={() => setShowForm(true)}
        />
      </div>
      {
        !tasks.length ? <Notification/> : ''
      }
      {
        showForm 
          ? <CreateTask 
              action={(task) => {
                setTasks([...tasks, task])
                setShowForm(false)
              }}

              taskToEdit={taskToEdit}

              update={updateTask}
            /> 
          : ''
      }
      {
      tasks.length && !showForm
        ? <Tasks edit={setTaskToEdit} show={setShowForm} data={tasks} update={setTasks}/> 
        : ''}
    </div>
    
  );
}

export default App;
