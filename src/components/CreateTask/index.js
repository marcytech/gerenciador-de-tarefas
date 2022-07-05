import { useState } from "react"
import Button from "../Button"
import './styles.css'

function CreateTask(props) {
  const [ description, setDescription ] = useState(props.taskToEdit?.description || '')


  const create = () => {
    const id = Date.now()
    props.action({id, description})
  }

  const update = () => {
    const newTask = { ...props.taskToEdit, description  }
    props.update(newTask)
  }

  const createOrUpdate = () => {
    if(props.taskToEdit) return update()
    create()
  }

  const createDescription = (event) => {
      setDescription(event.target.value)
  }

  const Rectangle = () => {}
    

  return(
    <div className="rectangle">
      <h1>
        NOVA TAREFA
        
      <span className="material-symbols-outlined btn-close">
        close
      </span>
      </h1>
      

      <div className="form ">
      <h1 className="title">Descrição</h1>
      
      <input type="text" value={description} onChange={createDescription}/>
      <div className="grid">
        <Button type="hollow" label="Cancelar"/>
        {
          description !== ''
          ? <Button type="create" action={createOrUpdate} label="Criar"/>
          : <Button type="create" action={createOrUpdate} label="Criar" disabled={true}/>

        }
      </div>
      </div>
     
    </div>
  )

}
 export default CreateTask