import React, { useState, useEffect } from 'react'

const EditForm = (props) => {
  const [car, setCar] = useState(props.currentCar)

  useEffect(() => { setCar(props.currentCar) }, [props])
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleChange = (event) => {
    const { name, value } = event.target

    setCar({ ...car, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const isOK = window.confirm("Are you sure to Update the item?")
    if (isOK) {
      if (!car.brand || !car.model || !car.price)
        return
      props.updateCar(car.id, car)
    }
  }

  return (
    <form onSubmit={handleSubmit} >
      <div className='myForm'>
        <table align='center'>
          <tr>
            <td align="right">Brand:</td>
            <td>
              <input name="brand" value={car.brand} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td align="right">Model:</td>
            <td>
              <input name="model" value={car.model} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td align="right">Price:</td>
            <td>
              <input name="price" value={car.price} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button className='btn btn-primary'>Update Car</button>
              <button onClick={() => props.setEditing(false)}
                className="btn btn-secondary">Cancel
              </button>
            </td>
          </tr>
        </table>
      </div>
    </form>
  )
}
export default EditForm
