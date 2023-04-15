import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import Tasks from '../components/Tasks'

const Home = () => {
    const [data , setData]= useState(null)

    useEffect(()=>{
        fetch("http://localhost:5000/api/tasks")
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err)=> console.log(err));

    }, [])

    return (
    <section className='section home' id='home-sec'>
        <div className="container sec--container">
            <div className="header sec--header">
                <h2 className='h-txt sec--h-txt'>Welcome to your ToDo List</h2>
            </div>
            <div className="content sec--content">
                <Link to={'./add-task'}>Add a new task</Link>
                {data && <Tasks data={data}/>}  
            </div>
        </div>
    </section>      
        
  )
}

export default Home