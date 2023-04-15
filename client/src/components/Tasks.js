import React, { useEffect, useState } from 'react'
import Task from './TaskCard';

const Tasks = (props) => {
    const data = props.data;
    const [dataExist , setDataExist] = useState(false);
    useEffect(()=>{
        if(data.length <= 0){
            setDataExist(false);
        }
        else{
            setDataExist(true);
        }
    },[])
     return (
        <div className='wrapper tasks-wrapper'>
            {   !dataExist && <p>there is no data</p> }
            {    data.map((task,index)=>{
                    return <Task key={index} title={task.title} desc={task.desc} date={task.date} />
                })
            }
        </div>
            
        
        
  )
}

export default Tasks