import React, { useState, useEffect } from 'react';
import CreateTaskPopup from '../modals/CreateTask';
import axios from 'axios';


const ToDoList = () => {

    //modal represents the popup
    const [modal, setModal] = useState(false);

    //handles all the existing tasks which are already created
    const [taskList, setTaskList] = useState([])

    //toggle represents the button to activate the modal popup
    const toggle = () => {
        setModal(!modal);
    }


    //Saves a task to the task array
    const saveTask = (taskObj) => {
        let tempList = taskList
        //push the new item to a temp holder of all existing items
        tempList.push(taskObj)
        //set local storage to temp holder
        localStorage.setItem("taskList", JSON.stringify(tempList))
        //set state to be equal to temp holder (which has the new item in it) I.E new item being added
        setTaskList(tempList)
        setModal(false)
        
        axios({
            url: 'http://localhost:8080/api/save',
            method: 'POST',
            data: taskObj
        })
            .then(() => {
                console.log('Data has been sent to the server');
            })
            .catch(() => {
                console.log('Internal server error');
            })
            ;
    }


    return (
        <>
            <div className='header text-center' >
                <h3>ToDo List</h3>
                <button className="btn btn-primary mt-3" onClick={() => setModal(true)} >Create Task</button>
            </div>
            <div className='task-container'>

                {taskList.map((obj) =>
                    <li>
                        {obj.Name},{obj.Description},{obj.NumberSelect}
                    </li>
                )}
            </div>
            <CreateTaskPopup toggle={toggle} modal={modal} save={saveTask} />
        </>
    );
};

export default ToDoList;