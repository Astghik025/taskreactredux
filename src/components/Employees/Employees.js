import { useDispatch, useSelector } from 'react-redux'
import './Employees.css'
import { useEffect, useRef } from 'react'
import { addEmployee, selectEmployees } from '../../store/slices/employees/employeesSlice'
import { fetchEmployees } from '../../store/slices/employees/employeesAPI'
import Employee from '../Employee/Employee'
import Spiner from '../Spiner/Spiner'

function Employees() {
	const dispatch = useDispatch()
    const {data: employees, isLoading} = useSelector(selectEmployees)
    const formRef = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault()
		dispatch(addEmployee({
			name:formRef.current[0].value,
            surname:formRef.current[1].value,
			email:formRef.current[2].value,
            position:formRef.current[3].value,
		}))
        formRef.current.reset()
    }

	useEffect(() => {
        if(!employees.length) {
            dispatch(fetchEmployees())
        }
    })

  return (
	 <div className='Employees'>
		<form ref={formRef} onSubmit={handleSubmit} style={{marginTop: '50px'}}>
			<input type='text' placeholder='name'/><br /><br />
			<input type='text' placeholder='surname'/><br /><br />
			<input type='text' placeholder='email'/><br /><br />
			<input type='text' placeholder='position'/><br /><br />
			<label className="input-file">
				<input type="submit" style={{display: 'none'}} name="file"/>		
				<span>Save</span>
			</label>
        </form>
		{
			isLoading ? <Spiner /> :
			employees.map(el => <Employee key={el.id} id={el.id} name={el.name} email={el.email} surname={el.surname} position={el.position}/>)
		}
	 </div>
  )
}

export default Employees
