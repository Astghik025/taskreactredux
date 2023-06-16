import { useEffect } from 'react'
import './Tasks.css'
import { fetchTasks } from '../../store/slices/tasks/tasksAPI'
import { useDispatch, useSelector } from 'react-redux'
import { selectTasks } from '../../store/slices/tasks/tasksSlice'

function Tasks() {
	const dispatch = useDispatch()
	const {data: tasks, isLoading} = useSelector(selectTasks)
	useEffect(() => {
        if(!tasks.length) {
            dispatch(fetchTasks())
        }
    })
  return (
	 <div className='Tasks'>
		Tasks
	 </div>
  )
}

export default Tasks
