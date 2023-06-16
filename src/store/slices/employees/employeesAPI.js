import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEmployees = createAsyncThunk(
    'employees/fetchEmployees',
    async function() {
        const {data: employeesData} = await axios.get(' https://rocky-temple-83495.herokuapp.com/employees')
        
        const data = [
            ...employeesData.map(employee => ({
                id: employee.id.toString(),
                name: employee.name.toString(),
                surname: employee.surname.toString(),
                email: employee.email.toString(),
                position: employee.position.toString(),
            }))
        ]
        // console.log(data, 'data');
        return data
    }
)