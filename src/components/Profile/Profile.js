import { useNavigate, useParams } from 'react-router-dom'
import './Profile.css'
import { useSelector } from 'react-redux'
import { selectEmployees } from '../../store/slices/employees/employeesSlice'


function Profile() {
    const {id} = useParams()
    const employees = useSelector(selectEmployees)
    const navigate = useNavigate()
    return (
        <div className='Profile'>
            <div className='container'>
                <h1>{employees.data.find(el => el.id === id).name}</h1>
                <h1>{employees.data.find(el => el.id === id).surname}</h1>
                <h2>{employees.data.find(el => el.id === id).email}</h2>
                <h2>{employees.data.find(el => el.id === id).position}</h2>
            </div>
            <button onClick={() => navigate(-1)} className='backPage'>Back</button>
            
        </div>
    )
}

export default Profile
