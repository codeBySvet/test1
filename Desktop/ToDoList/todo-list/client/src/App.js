import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Read } from './components/Read';


import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function App() {
  return (
    <div className="App">
      <ToDoList></ToDoList>
      <Read></Read>
    </div>
  );
}

export default App;
