
import { Fragment, useState } from "react";
import AddForm from "./component/AddForm";
import EditForm from "./component/EditForm";
import ListView from "./component/ListView";
import CarsDB from './cars.json';


const App = () => {
  const myStyle = {
    color: 'blue',
    fontStyle: 'italic',
  }
  const initialState = {id:null, brand:'', model:'', price: null}
  //1.list item to listview (read)
  const [cars, setCars ] = useState(CarsDB)
  const [currentCar, setCurrentCar] = useState(initialState)
  const [editing, setEditing] = useState(false)
  //2.add new data (sreate)
  const addCar = (car) => {
    car.id = cars.length +1
    setCars([...cars, car])
  }
  //3.edit current data (update)
  //3.1. get the item
  const getRow = (car) => {
    setEditing(true)
    setCurrentCar({id: car.id, brand: car.brand, model: car.model, price: car.price})
  }
  //3.2.update the particular item
  const updateCar = (id, updateCar) => {
    setEditing (false)
    setCars(cars.map(car => (car.id === id ? updateCar : car)))
  };
    //4. delete current data (delete)
  const deleteCar = (id) => {
    setEditing (false)
    setCars(cars.filter(car => car.id !== id))
  };
  
  return(
    <div className="container">
      <h1>Item Management System</h1>
      <div>
        <div>
          {editing ? (
            <Fragment>
              <h2>Edit Car</h2>
              <EditForm
              editing = {editing}
              setEditing = {setEditing}
              currentCar = {currentCar}
              updateCar = {updateCar}/>
            </Fragment>
          ):(
            <Fragment>
              <h2>Add Car</h2>
              <AddForm addCar = {addCar}/>
            </Fragment>
          )} 
        </div>

        <div>
          <h2>View Cars</h2>
          <ListView cars={cars} getRow={getRow} deleteCar={deleteCar}/>          
        </div>
      </div>
    </div>
  );
}
export default App;