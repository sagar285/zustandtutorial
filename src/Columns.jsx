import React, { useState } from 'react'
import Task from './Task'
import { useStore } from './store'
import classNames from 'classnames';

const Columns = ({state}) => {
    const [open,setopen]=useState(false);
    const [text,settext]=useState('')
    const [drop,setdrop]=useState(false)
   const tasks= useStore((store)=>store.tasks.filter((task)=>task.state===state))

   const setDraggedTask =useStore((store)=>store.setDraggedTask)
   const draggedTask= useStore((store)=>store.draggedTask)
   const moveTask=useStore((store)=>store.moveTask)

    const addTask = useStore((store)=>store.addTask)

  return (
    <div className={classNames('column',{drop:drop})}
    
    onDragOver={(e)=>{
        setdrop(true)
        e.preventDefault()
    }}

    onDragLeave={(e)=>{
        setdrop(false)
        e.preventDefault()
    }}

    onDrop={(e)=>{
        setdrop(false)
        moveTask(draggedTask,state)
        setDraggedTask(null)
    }}
    
    
    



    >
        <div className='titleWrapper'>
            <p>{state}</p>
            <button onClick={()=>setopen(true)} >Add</button>
        </div>
        {
            tasks.map((task)=>(
                <Task title={task.title}/>
            ))
        }

      {
        open && (

             <div className='Modal'>
              <div className='modalContent'>
                <input type="text" value={text} onChange={(e)=>settext(e.target.value)} />
                <button onClick={()=>{
                    addTask(text,state)
                    settext('')
                    setopen(false);
                }}>Submit</button>
              </div>
             </div>

        )
      }



    </div>
  )
}

export default Columns