import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async function() {
        const {data: tasksData} = await axios.get('https://rocky-temple-83495.herokuapp.com/tasks')
        
        const data = [
            ...tasksData.map(el => ({
                id: el.id.toString(),
                name: el.name.toString(),
                emploeeId: el.employeeid.toString(),
                description: el.description.toString(),
                startdate: el.startdate.toString(),
                enddate: el.enddate.toString(),
                emploeeId: el.employeeid.toString(),

            }))
        ]
        return data
    }
)