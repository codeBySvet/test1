import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

//passing modal and toggle from ToDoList.js
const CreateTaskPopup = ({ toggle, save }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [numberSelect, setNumberSelect] = useState(0);
    //Function to handle the user typing into either the task title box or description box
    const handleChange = (e) => {
        const {name, value} = e.target

        if (name === "taskName") setTaskName(value)
        else if (name === "description") setDescription(value)
        else if (name === "numberSelect") setNumberSelect(value)
    }
    //saves and/or pushes the task to the array of all tasks
    const handleSave = () => {
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        taskObj["NumberSelect"] = numberSelect
        save(taskObj)
        modal=false;
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>

                <form>
                    <div className="form-group">
                        <label>Task Name</label>
                        <input type="text" className='form-control' value={taskName} name="taskName" onChange={handleChange}>

                        </input>
                    </div>
                </form>
                <br />
                <form>
                    <div className="form-group" >
                        <label>Description</label>
                        <textarea rows="5" className='form-control' value={description} name="description" onChange={handleChange}>

                        </textarea>
                    </div>
                </form>
                <form>
                    <div class="form-group">
                        <label for="exampleFormControlSelect2">Multiple select</label>
                        <select multiple class="form-control" id="exampleFormControlSelect2" value={numberSelect} name="numberSelect" onChange={handleChange}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>Confirm</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateTaskPopup;