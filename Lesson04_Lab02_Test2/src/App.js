
import { Fragment, useState } from "react";
import AddForm from "./component/AddForm";
import EditForm from "./component/EditForm";
import ListView from "./component/ListView";
import PeoplesDB from './people.json';


const App = () => {
  const myStyle = {
    color: 'blue',
    fontStyle: 'italic',
  }
  const initialState = {id:null, school:'', industry:'', year: ''}
  //1.list item to listview (read)
  const [peoples, setPeoples ] = useState(PeoplesDB)
  const [currentPeople, setCurrentPeople] = useState(initialState)
  const [editing, setEditing] = useState(false)
  //2.add new data (sreate)
  const addPeople = (people) => {
    people.id = peoples.length +1
    setPeoples([...peoples, people])
  }
  //3.edit current data (update)
  //3.1. get the item
  const getRow = (people) => {
    setEditing(true)
    setCurrentPeople({id: people.id, school: people.school, industry: people.industry, year: people.year})
  }
  //3.2.update the particular item
  const updatePeople = (id, updatePeople) => {
    setEditing (false)
    setPeoples(peoples.map(people => (people.id === id ? updatePeople : people)))
  };
    //4. delete current data (delete)
  const deletePeople = (id) => {
    setEditing (false)
    setPeoples(peoples.filter(people => people.id !== id))
  };
  
  return(
    <div className="container mt-3">
      <h1>Information Management System</h1>
      <div>
        <div>
          {editing ? (
            <Fragment>
              <h2>Edit Information</h2>
              <EditForm
              editing = {editing}
              setEditing = {setEditing}
              currentPeople = {currentPeople}
              updatePeople = {updatePeople}/>
            </Fragment>
          ):(
            <Fragment>
              <h2>Add Information</h2>
              <AddForm addPeople = {addPeople}/>
            </Fragment>
          )} 
        </div>

        <div>
          <h2>View Informations</h2>
          <ListView peoples={peoples} getRow={getRow} deletePeople={deletePeople}/>          
        </div>
      </div>
    </div>
  );
}
export default App;
