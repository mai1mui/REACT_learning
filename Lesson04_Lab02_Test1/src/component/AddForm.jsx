import { useState } from 'react'

const AddForm = (props) => {
	const initialState = { id: null, brand: '', model: '', price: null }
	const [car, setCar] = useState(initialState)

	const handleChange = (event) => {
		const { name, value } = event.target
		setCar({ ...car, [name]: value })
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		if (!car.brand || !car.model || !car.price)
			return
		props.addCar(car)
		event.target.reset();
		setCar(initialState)
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
							<button className='btn btn-primary'>Add new Car</button>
						</td>
					</tr>
				</table>
			</div>
		</form>
	)
}

export default AddForm
