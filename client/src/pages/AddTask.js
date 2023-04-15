import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';


const AddTask = () => {
    const [task, setTask] = useState("");
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState();

    const navigate = useNavigate();

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:5000/api/tasks", {
                method: "POST",
                headers:{
                    'Content-type':"application/json"
                },
                body:JSON.stringify({
                    title:task,
                    desc:desc,
                    date:date,
                }),
            });
          let resJson = await res.json();
          if (res.status === 200) {
            setTask("");
            setDesc("");
            setDate("");
            navigate('/');
          }
        } catch (err) {
          console.log(err);
        }
    };
    useEffect(()=>{

    }, [])
    return (
        <>
            <form className='add-task--form' onSubmit={(e)=> {handleSubmit(e)}}>
                <div className="row">
                    <label htmlFor="task">What you wanna do:</label>
                    <input className='input' type="text" name="task" id="task" onChange={(e) => setTask(e.target.value)} />
                </div>
                <div className="row">
                    <label htmlFor="desc">Describe the task :</label>
                    <textarea className='input' name="desc" id="desc" cols="30" rows="6" onChange={(e) => setDesc(e.target.value)} ></textarea>
                </div>
                <div className="row">
                    <label htmlFor="date">When you wanna do it :</label>
                    <input className='input' type="date" name="date" id="date" onChange={(e) => setDate(e.target.value)}  />
                </div>
                <div className="row">
                    <input className='input'  type="submit" value="Add Task" />
                    <Link className='input' to={'..'}>Back Home</Link>
                </div>
            </form>
        </>
    )
}

export default AddTask