import React from "react";
import CreateTaskPopup from '../modals/CreateTask';
import axios from 'axios';

export class Read extends React.Component {

      //modal represents the popup
    modal= false;

      //handles all the existing tasks which are already created
      const [taskList, setTaskList] = useState([])
  
      //toggle represents the button to activate the modal popup
      const toggle = () => {
          setModal(!modal);
      }

    //Binding the event
    constructor() {
        super();
        //this.ReloadPage=this.ReloadPage.bind(this);
    }

    //State acts as a holder of data which is linked to a specific component
    state = {
        //Json collection of songs
        contentPost: []
    }
    //Lifecycle hook, which gets called every time the component is mounted (active in the view)
    componentDidMount() {
        modal= false;
        axios.get('http://localhost:8080/api')
            .then((response) => {
                this.setState({ songs: response.data })
                // this.redirect('/operationError546');
            })
            .catch((error) => {

                console.log(error)
                //this.props.history.push('/operationError')

            });
    }
    //Method to reload the page, after a SongItem is deleted
    // ReloadPage(){
    //     axios.get('http://localhost:4000/api/songs')
    //     .then((response)=>{
    //         this.setState({ songs: response.data})
    //     })
    //     .catch(()=>{
    //         this.props.history.push('/operationError')
    //     });
    // }

    render() {
        return (
            <div>
                <h1>To-Do List</h1>
                {/* Calling songs.js component  */}
                {/* Also passing it down the state data  */}
                {/* <Songs objectName={this.state.songs} ReloadPage={this.ReloadPage}> </Songs> */}
                {/* <Songs objectName={this.state.songs}> </Songs> */}


            <div className='header text-center' >
                <h3>ToDo List</h3>
                <button className="btn btn-primary mt-3" onClick={Modal=true} >Create Task</button>
            </div>
            <div className='task-container'>

                {/* {taskList.map((obj) =>
                    <li>
                        {obj.Name},{obj.Description},{obj.NumberSelect}
                    </li>
                )} */}
            </div>
            <CreateTaskPopup toggle={toggle} modal={modal} save={saveTask} />





            </div>
        );
    }
}