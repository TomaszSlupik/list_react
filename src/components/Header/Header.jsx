import React from 'react'
import { useState } from 'react';
import './Header.scss'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';

export default function Header({tasks, setTasks}) {

const [inputTask, setInputTask] = useState("")

const style = {
    btn: {
        marginLeft: '1em'
    }
}

const inputTaskFunction = (e) => {
    e.preventDefault()
    setInputTask(e.target.value)
    console.log(inputTask)
}


const addTaskToList = () => {
    const newTask = {
        name_task: inputTask
    }

    const addNewTask = [...tasks, newTask]
    setTasks(addNewTask)
}




  return (
    <div className='header'>
        <div className="header__nav">
            Wpisz nowe zadanie      
        </div>
        <div className="header__input">
        <TextField 
        onChange={inputTaskFunction}
        id="outlined-basic" label="Zadanie" variant="outlined" />
        <Button 
        onClick={addTaskToList}
        style={style.btn} variant="outlined">Zapisz</Button>
        </div>
    </div>
  )
}
