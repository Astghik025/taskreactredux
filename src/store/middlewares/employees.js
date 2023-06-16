export const ignoreEmptyEmployee = () => (next) => (action) => {
    if (action.type === 'employees/addEmployee' && (!action.payload.name.trim() || !action.payload.surname.trim() || !action.payload.email.trim() || !action.payload.position.trim())) {
        return
    }
    return next(action)
}