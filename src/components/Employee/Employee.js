import { useDispatch } from 'react-redux'
import './Employee.css'
import { deleteEmployee } from '../../store/slices/employees/employeesSlice'
import { NavLink } from 'react-router-dom'
import { memo } from 'react'


function Employee({id, name, surname, email, position}) {
  const dispatch = useDispatch()
  return (
	 <div className='Employee'>
        <h2>{name} </h2>
        <h2>{surname}</h2>
        <p>{email}</p>
        <p>{position}</p>
        <div className="item-info">
          <button onClick={() => dispatch(deleteEmployee({
            id: id
          }))}>X</button>
          <NavLink style={{textDecoration: 'none'}} to={`${id}/uniq`}>
            <button className='item-info'>See More</button>
          </NavLink>
        </div>
	 </div>
  )
}

export default memo(Employee)
