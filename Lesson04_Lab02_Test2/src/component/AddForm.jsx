import { useState } from 'react'

const AddForm = (props) => {
	const initialState = { id: null, school: '', industry: '', year: null }
	const [people, setPeople] = useState(initialState)

	const handleChange = (event) => {
		const { name, value } = event.target
		setPeople({ ...people, [name]: value })
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		if (!people.school || !people.industry || !people.year)
			return
		props.addPeople(people)
		event.target.reset();
		setPeople(initialState)
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
							<button className='btn btn-primary'>Add New Info</button>
						</td>
					</tr>
				</table>
			</div>
		</form>
	)
}

export default AddForm
