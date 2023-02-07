import React from 'react'
import { useState } from 'react'
import Header from '../Header/Header'
import './Tasks.scss'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

export default function Tasks() {


    const [tasks, setTasks] = useState([
        {
            id: 1,
            name_task: 'Jedziemy w pociągu'
        }, 
        {
            id: 2, 
            name_task: 'Wrócić do domu'
        }
    ])

  return (
    <div>
        <Header tasks={tasks} setTasks={setTasks}/>
        <div className="tasks">
            {
                tasks.map((el, index) => {
                    return (
                        <div key={index}>
                            <div className="boxTask">
                                <ul>
                                    <li>
                                    <AssignmentTurnedInIcon />
                                    {el.name_task}
                                    </li>
                                </ul>
                            </div> 
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
