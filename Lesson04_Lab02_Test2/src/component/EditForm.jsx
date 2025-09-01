import React, { useState, useEffect } from 'react'

const EditForm = (props) => {
  const [people, setPeople] = useState(props.currentPeople)

  useEffect(() => { setPeople(props.currentPeople) }, [props])
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleChange = (event) => {
    const { name, value } = event.target

    setPeople({ ...people, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const isOK = window.confirm("Are you sure to Update the item?")
    if (isOK) {
      if (!people.school || !people.industry || !people.year)
        return
      props.updatePeople(people.id, people)
    }
  }

  return (
    <form onSubmit={handleSubmit} >
      <div className='myForm'>
        <table align='center'>
          <tr>
            <td align="right">School:</td>
            <td>
              <input name="school" value={people.school} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td align="right">Industry:</td>
            <td>
              <input name="industry" value={people.industry} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td align="right">Year:</td>
            <td>
              <input name="year" value={people.year} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button className='btn btn-primary'>Update Info</button>
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
