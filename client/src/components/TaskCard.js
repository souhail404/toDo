import React from 'react'

const Task = (props) => {
    const title = props.title;
    const desc = props.desc;
    const date = props.date;

    return (
        <div className='wrapper task-wrapper'>
            <div className="data task">
                <h3 className='h-txt task--h-txt'>{title}</h3>
            </div>
            <div className="data description">
                <p className='tatsk--n-txt'>{desc}</p>
            </div>
            <div className="data date">
                <p className='tatsk--n-txt'>{date}</p>
            </div>
        </div>
    )
}

export default Task