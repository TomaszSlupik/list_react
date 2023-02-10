import React from 'react'
import Header from '../Header/Header'
import './Tasks.scss'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import axios from '../../axios'

class Tasks extends React.Component  {
    constructor (props)   {
        super (props)
        this.state =  {
            task: [
                {
                    id: 1,
                    name_task: 'Jedziemy w pociągu'
                }, 
                {
                    id: 2, 
                    name_task: 'Wrócić do domu'
                }
            ]}}

    componentDidMount () {
        this.fetchAllTask()
    }

  
    async fetchAllTask() {
        const res  = axios.get('http://localhost:3001/api/task')
        const task = res.data
        // this.setState({task})
        console.log(task)
    }

render() {

  return (
    <div>
        <Header />
        <div className="tasks">
            {
                this.state.task.map((el, index) => {
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
}
export default Tasks
